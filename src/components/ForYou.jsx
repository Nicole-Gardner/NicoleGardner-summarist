  import SuggestedBooks from './SuggestedBooks.jsx';
  import SelectedBooks from './SelectedBooks.jsx';
  import RecommendedBooks from './RecommendedBooks.jsx';
  import SearchBar from "./SearchBar";

function ForYou() {
  return (
    <div>
      <h1>Welcome to Summarist!</h1>
      <SearchBar />
      <p>You have successfully logged in.</p>
      <SuggestedBooks />
      <SelectedBooks />
      <RecommendedBooks />
    </div>
  );
}

export default ForYou;