import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">swadSetu</div>
        <ul className="nav-links">
          <li><a href="#" className="active">Menu</a></li>
          <li><a href="#">Artisans</a></li>
          <li><a href="#">Our Story</a></li>
          <li><a href="#">Subscription</a></li>
        </ul>
        <div className="nav-actions">
          <a href="#" className="nav-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </a>
          <a href="#" className="nav-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </a>
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
