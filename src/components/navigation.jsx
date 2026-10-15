import React from 'react';
import { Link } from "react-router";
 import SuggestedBooks from './SuggestedBooks';
  import SelectedBooks from './SelectedBooks';
  import RecommendedBooks from './RecommendedBooks';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;