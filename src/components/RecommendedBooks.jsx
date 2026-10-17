import { Link } from "react-router";
import React, { useEffect, useState } from 'react';
const RecommendedBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended"
                );
                const jsonData = await response.json();
                setBooks(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {books.map((item) => (
                <img key={item.id} src={item.imageLink} alt={item.title} />
            ))}
        </div>
    );
};

export default RecommendedBooks;
