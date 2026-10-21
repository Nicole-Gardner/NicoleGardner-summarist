import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AudioPlayer from "./AudioPlayer";

const BookSummary = () => {
  const { id: bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${bookId}`
        );

        const jsonData = await response.json();
        console.log(jsonData);
        setBook(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [bookId]);

  if (!book) return <p>Loading book...</p>;

return (
  <div>
    <h1>{book.title}</h1>
    <p>{book.author}</p>
    <img src={book.imageLink} alt={book.title} />

    <h2>Book Summary</h2>
    <p>{book.summary}</p>
    <AudioPlayer audioLink={book.audioLink} />
  </div>
);

};

export default BookSummary;