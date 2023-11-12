import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleRefresh = () => {
    window.location.reload(); 
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Recipe App
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/add">
              Add a Recipe
            </Link>
          </li>
          <li className="nav-item">
            <button className="btn btn-light" onClick={handleRefresh}>
              Refresh
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
