import { Link } from "react-router";
import React, { useEffect, useState } from 'react';
import SkeletonState from "./SkeletonState";
const RecommendedBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const jsonData = await response.json();
        setBooks(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return <SkeletonState />;
  }
  return (
    <div className="books__container">
      {books.map((item) => (
        <Link
          key={item.id}
          to={`/book-summary/${item.id}`}
        >
          {item.subscriptionRequired && (
            <span className="book__premium--badge">
              Premium
            </span>
          )}
          <img
            className="book__image"
            src={item.imageLink}
            alt={item.title}
          />
        </Link>
      ))}
    </div>
  );
};

export default RecommendedBooks;
