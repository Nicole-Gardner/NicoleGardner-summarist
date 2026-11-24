import { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router";
import AudioPlayer from "./AudioPlayer";
import "./PlayerPage.css";

const PlayerPage = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [error, setError] = useState("");
    const { fontSize } = useOutletContext();

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await fetch(
                    `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch book");
                }

                const data = await response.json();
                setBook(data);
            } catch (error) {
                console.error(error);
                setError("Unable to load this book.");
            }
        };

        fetchBook();
    }, [id]);

    if (error) return <p>{error}</p>;
    if (!book) return <p>Loading book...</p>;

    return (
        <div className="player__content">
            <h1>{book.title}</h1>
           <p style={{
  whiteSpace: "pre-line",
  fontSize: `${fontSize}px`
}}>
  {book.summary}
</p>
                <AudioPlayer
                    audioLink={book.audioLink}
                    imageLink={book.imageLink}
                    author={book.author}
                />
    
        </div>
    );
};

export default PlayerPage;