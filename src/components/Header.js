import React from "react";

const Header = () => {
  return (
    <div>
      <nav>
        <img
          className="nav-logo"
          src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1642980740/logo-react_r38nnw.png"
          alt=""
        />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
