import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AudioPlayer from "./AudioPlayer";

function BookSummary() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await fetch(
        `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
      );
      const data = await response.json();
      setBook(data);
    };
    fetchBook();
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <section className="book-summary">
      <img src={book.imageLink} alt={book.title} className="book-summary__image" />
      <h1>{book.title}</h1>
      <h3>By {book.author}</h3>
      <p>{book.summary}</p>
      <h2>Listen to the Summary</h2>
      <AudioPlayer />
    </section>
  );
}

export default BookSummary;