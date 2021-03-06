import React from 'react';
import { Link } from 'react-router-dom';

const HomeView = () => {
  return (
    <>
      <h1>Redux VS React-query</h1>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/redux">Redux</Link>
            </li>
            <li>
              <Link to="/query">Query</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default HomeView;
