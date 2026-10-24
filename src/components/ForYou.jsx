  import SuggestedBooks from './SuggestedBooks.jsx';
  import SelectedBooks from './SelectedBooks.jsx';
  import RecommendedBooks from './RecommendedBooks.jsx';

function ForYou() {
  return (
    <div>
        <nav className="nav">
          <div className="nav__wrapper">
            <figure className="nav__img--mask">
              <img className="logo" src="assets/logo.png" alt="logo" />
            </figure>
          </div>
        </nav>
      <h1>Welcome to Summarist!</h1>
      <p>You have successfully logged in.</p>
      <SuggestedBooks />
      <SelectedBooks />
      <RecommendedBooks />
    </div>
  );
}

export default ForYou;