import React from "react";
import "./header.css"

function Header() {
  return (
    <div>
      <nav className="header">
        <section className="clone">
          <img src="instacopy.png" alt="clone"></img>
        </section>
        <section className="icon">
          <a href="/upload">
          <img src="insta1.png" alt="icon" ></img>
          </a>

        </section>
      </nav>
    </div>
  );
}

export default Header;
