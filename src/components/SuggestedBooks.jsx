import React, { useEffect, useState,} from "react";


const SuggestedBooks = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("suggested");
  const [sortOption, setSortOption] = useState("newest");

  async function fetchBooks() {
    const res = await fetch(
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested"
    );
    const data = await res.json();

    if (data.Search) {
      setBooks(data.Search);
    } else {
      setBooks([]);
    }
  }

  useEffect(() => {
    fetchBooks();
    // eslint-disable-next-line
  }, []);

  const sortedBooks = [...books].sort((a, b) => {
    const yearA = parseInt(a.Year, 10);
    const yearB = parseInt(b.Year, 10);
    return sortOption === "newest" ? yearB - yearA : yearA - yearB;
  });
  return (
    <div className="row">
      <div className="search__container">
        <input
          type="text"
          value={searchQuery}
          className="search__container--input"
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for books"
        />
        <button className="search__container--btn" onClick={fetchBooks}>
          Search Book
        </button>
        <select
          onChange={(e) => setSortOption(e.target.value)}
          value={sortOption}
          className="search__container--sort"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      <div className="book__container">
        {sortedBooks.length > 0 ? (
          sortedBooks.map((book) => (
            <Link to={`/books/${book.imdbID}`} key={book.imdbID}>
              <div className="book">
                <h1>{book.Title}</h1>
                <p>{book.Year}</p>

                <figure>
                  <img src={book.Poster} alt={book.Title} />
                </figure>
              </div>
            </Link>
          ))
        ) : (
          <p>Loading Books...</p>
        )}
      </div>
    </div>
  );
};

export default SuggestedBooks;