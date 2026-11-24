import { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router";
import AudioPlayer from "./AudioPlayer";
import "./PlayerPage.css";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import { Link } from "react-router";

const PlayerPage = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [error, setError] = useState("");
    const { fontSize } = useOutletContext();
    const [subscription, setSubscription] = useState(null);
const [checkingSubscription, setCheckingSubscription] = useState(true);

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
      console.error(error);
    } finally {
      setCheckingSubscription(false);
    }
  });

  return () => unsubscribe();
}, []);

useEffect(() => {
  const fetchBook = async () => {
            try {
                const response = await fetch(
                    `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch book");
                }

                const data = await response.json();
                setBook(data);
            } catch (error) {
                console.error(error);
                setError("Unable to load this book.");
            }
        };

        fetchBook();
    }, [id]);

    if (error) return <p>{error}</p>;

if (!book || checkingSubscription) {
  return <p>Loading book...</p>;
}

const hasSubscription =
  subscription?.subscriptionStatus === "active" &&
  ["premium", "premium-plus"].includes(
    subscription?.subscriptionPlan
  );

if (book.subscriptionRequired && !hasSubscription) {
  return (
    <div>
      <p>This book requires a Premium subscription.</p>
      <Link to="/sales-page">Upgrade to Premium</Link>
    </div>
  );
}
    return (
        <div className="player__content">
            <h1>{book.title}</h1>
           <p style={{
  whiteSpace: "pre-line",
  fontSize: `${fontSize}px`
}}>
  {book.summary}
</p>
                <AudioPlayer
                    audioLink={book.audioLink}
                    imageLink={book.imageLink}
                    author={book.author}
                />
    
        </div>
    );
};

export default PlayerPage;