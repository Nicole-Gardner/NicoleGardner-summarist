import { useState } from "react";
import { Link } from "react-router";
const LibraryPage = () => {
  const [savedBooks] = useState(() =>
    JSON.parse(localStorage.getItem("savedBooks") || "[]")
  );
  const [finishedBooks] = useState(() =>
    JSON.parse(localStorage.getItem("finishedBooks") || "[]")
  );

  return (
    <div className="library__content">
      <h1>My Library</h1>

      <h2>Saved Books</h2>
      {savedBooks.length > 0 ? (
        <div className="library__books">
          {savedBooks.map((book) => (
            <Link
              to={`/book-summary/${book.id}`}
              key={book.id}
              className="library__book"
            >
              <img src={book.imageLink} alt={book.title} />
              <h3>{book.title}</h3>
            </Link>
          ))}
        </div>
      ) : (
        <p>No saved books yet.</p>
      )}

      <h2>Finished Books</h2>
      {finishedBooks.length > 0 ? (
        <div className="library__books">
          {finishedBooks.map((book) => (
            <Link
              to={`/book-summary/${book.id}`}
              key={book.id}
              className="library__book"
            >
              <h3>{book.title}</h3>
              <img src={book.imageLink} alt={book.title} width="150" />
            </Link>
          ))}
        </div>
      ) : (
        <p>No finished books yet.</p>
      )}
    </div>
  );
};

export default LibraryPage;