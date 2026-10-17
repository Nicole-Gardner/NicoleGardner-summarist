  import SuggestedBooks from './SuggestedBooks.jsx';
  import SelectedBooks from './SelectedBooks.jsx';
  import RecommendedBooks from './RecommendedBooks.jsx';

function ForYou() {
  return (
    <div>
      <h1>Welcome to Summarist!</h1>
      <p>You have successfully logged in.</p>
      <SuggestedBooks />
      <SelectedBooks />
      <RecommendedBooks />
    </div>
  );
}

export default ForYou;