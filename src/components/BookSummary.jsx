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
  const handleFinishBook = () => {
  const finishedBooks = JSON.parse(
    localStorage.getItem("finishedBooks") || "[]"
  );

  if (!finishedBooks.some((saved) => saved.id === book.id)) {
    finishedBooks.push(book);
    localStorage.setItem(
      "finishedBooks",
      JSON.stringify(finishedBooks)
    );
  }
};
  
const handleSaveBook = () => {
  if (!book) return ;
   const savedBooks = JSON.parse(
    localStorage.getItem("savedBooks") || "[]"
  );

  if (!savedBooks.some((saved) => saved.id === book.id)) {
    savedBooks.push(book);
    localStorage.setItem("savedBooks", JSON.stringify(savedBooks));
    alert("Book added to your library!");
  } else {
    alert("Book is already in your library!");
  
    
  }
};

return (
  <div>
    <h1>{book.title}</h1>
    <p>{book.author}</p>
    <img src={book.imageLink} alt={book.title} />
    <button onClick={handleSaveBook}>
  Add to Library
</button>

    <h2>Book Summary</h2>
    <p>{book.summary}</p>
<AudioPlayer
  audioLink={book.audioLink}
  imageLink={book.imageLink}
  author={book.author}
  onFinish={handleFinishBook}
/>
  </div>
);

};

export default BookSummary;