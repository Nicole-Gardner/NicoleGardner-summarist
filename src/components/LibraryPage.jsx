import { useState } from "react";

const LibraryPage = () => {
  const [savedBooks] = useState(() =>
    JSON.parse(localStorage.getItem("savedBooks") || "[]")
  );

  return (
    <div>
      <h1>My Library</h1>

      <h2>Saved Books</h2>
      {savedBooks.length > 0 ? (
        savedBooks.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <img
              src={book.imageLink}
              alt={book.title}
              width="150"
            />
          </div>
        ))
      ) : (
        <p>No saved books yet.</p>
      )}

      <h2>Finished Books</h2>
      <p>No finished books yet.</p>
    </div>
  );
};

export default LibraryPage;