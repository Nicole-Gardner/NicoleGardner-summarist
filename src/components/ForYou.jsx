  import SuggestedBooks from './SuggestedBooks';
  import SelectedBooks from './SelectedBooks';
  import RecommendedBooks from './RecommendedBooks';

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