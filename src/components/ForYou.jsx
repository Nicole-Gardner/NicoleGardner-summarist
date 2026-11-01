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