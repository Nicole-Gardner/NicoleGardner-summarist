import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
       <li
  className="nav__list nav__list--login"
  onClick={() => setIsLoginOpen(true)}
>
  Login
</li>
<button
  className="btn home__cta--btn"
  onClick={() => setIsLoginOpen(true)}
>
  Login
</button>
      </ul>
    </nav>
  );
};

export default Navigation;