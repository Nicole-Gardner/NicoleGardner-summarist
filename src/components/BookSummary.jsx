import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AudioPlayer from "./AudioPlayer";
import "./HomeStyle.css"; import { onAuthStateChanged } from "firebase/auth";

import { doc, getDoc } from "firebase/firestore";

import { auth, db } from "./firebase";

import { Link } from "react-router";


const BookSummary = () => {
  const { id: bookId } = useParams();
  const [book, setBook] = useState(null);
  const [subscription, setSubscription] = useState(null);

  const [checkingSubscription, setCheckingSubscription] = useState(true);

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
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, async (user) => {

      setCheckingSubscription(true);

      setSubscription(null);



      try {

        if (user) {

          const snapshot = await getDoc(doc(db, "users", user.uid));



          if (snapshot.exists()) {

            setSubscription(snapshot.data());

          }

        }

      } catch (error) {

        console.error("Subscription lookup failed:", error);

      } finally {

        setCheckingSubscription(false);

      }

    });



    return () => unsubscribe();

  }, []);
  if (!book || checkingSubscription) {

    return <p>Loading...</p>;

  }
  const hasSubscription =

    subscription?.subscriptionStatus === "active" &&

    ["premium", "premium-plus"].includes(

      subscription?.subscriptionPlan

    );



  const canAccessBook = !book.subscriptionRequired || hasSubscription;
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
    if (!book) return;

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
    <div className="book-summary">
      <div className="book-summary__layout">

        <div className="book-summary__details">
          <h1>{book.title}</h1>
          <p>{book.author}</p>

          <button onClick={handleSaveBook}>
            Add to Library
          </button>

          <h2>Book Summary</h2>
          {canAccessBook ? (

            <p className="summary__content">

              {book.summary}

            </p>

          ) : (

            <p>

              This book requires an active Premium subscription.

              <Link to="/subscription-plans">

                View subscription plans

              </Link>

            </p>

          )}
        </div>

        <img
          className="book-summary__image"
          src={book.imageLink}
          alt={book.title}
        />

      </div>

      {canAccessBook && (

        <AudioPlayer

          audioLink={book.audioLink}

          imageLink={book.imageLink}

          author={book.author}

          onFinish={handleFinishBook}

        />

      )}
    </div>
  );
};

export default BookSummary;