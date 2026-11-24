  import SuggestedBooks from './SuggestedBooks.jsx';
  import SelectedBooks from './SelectedBooks.jsx';
  import RecommendedBooks from './RecommendedBooks.jsx';
  import SearchBar from "./SearchBar";

function ForYou() {
  return (
    <div className="for-you">
      <main className="for-you__content">
  <h1>Welcome to Summarist!</h1>
  <p>You have successfully logged in.</p>

  <h2>Suggested Books</h2>
  <SuggestedBooks />

  <h2>Selected Books</h2>
  <SelectedBooks />

  <h2>Recommended Books</h2>
  <RecommendedBooks />
</main>
    </div>
  );
}

export default ForYou;