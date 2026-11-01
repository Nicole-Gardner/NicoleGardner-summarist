import { useState } from "react";

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
            <div className="library__book" key={book.id}>
              <img src={book.imageLink} alt={book.title} />
              <h3>{book.title}</h3>
            </div>
          ))}
        </div>
      ) : (
        <p>No saved books yet.</p>
      )}

      <h2>Finished Books</h2>
      {finishedBooks.length > 0 ? (
        <div className="library__books">
          {finishedBooks.map((book) => (
            <div className="library__book" key={book.id}>
              <h3>{book.title}</h3>
              <img src={book.imageLink} alt={book.title} width="150" />
            </div>
          ))}
        </div>
      ) : (
        <p>No finished books yet.</p>
      )}
    </div>
  );
};

export default LibraryPage;