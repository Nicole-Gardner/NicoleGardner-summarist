import { Link } from "react-router";
import React, { useEffect, useState } from "react";
import SkeletonState from "./SkeletonState";

const SuggestedBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }

        const jsonData = await response.json();
        setBooks(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <SkeletonState />
      ) : (
        books.map((item) => (
          <Link
            key={item.id}
            to={`/book-summary/${item.id}`}
          >
            <img src={item.imageLink} alt={item.title} />
          </Link>
        ))
      )}
    </div>
  );
};

export default SuggestedBooks;