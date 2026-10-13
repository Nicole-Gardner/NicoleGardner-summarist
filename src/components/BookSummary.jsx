import AudioPlayer from "./AudioPlayer";

function BookSummary() {
  return (
    <section className="book-summary">
        <img
  src="https://placehold.co/200x300?text=Book+Cover"
  alt="Placeholder book cover"
  className="book-summary__image"
/>
      <h1>The Midnight Library</h1>
      <h3>By Matt Haig</h3>

      <p>
        This is a placeholder description for our book.
        We'll replace this with the actual book summary
        when we're ready!
      </p>

      <h2>Listen to the Summary</h2>
      <AudioPlayer />
    </section>
  );
}

export default BookSummary;