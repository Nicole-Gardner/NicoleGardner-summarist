import { useEffect, useState } from "react";
import { Link } from "react-router";
import "./SearchBar.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }

        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for books"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      {searchTerm.trim() !== "" && (
        <div className="search__results">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <Link
                key={book.id}
                to={`/book-summary/${book.id}`}
              >
                <p>{book.title}</p>
              </Link>
            ))
          ) : (
            <p>No matching books found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;