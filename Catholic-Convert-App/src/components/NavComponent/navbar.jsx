import React from 'react';

function Navbar() {
  return (
    <div>
      <nav class = "navbar">
        <div class = "navbar-item">
          <a class="navText">Home</a>
        </div>
        <div class = "navbar-item">
          <a class="navText">Find a Church</a>
        </div>
        <div class = "navbar-item">
          <a class="navText">About</a>
        </div>
        <div class = "navbar-item">
          <a class="navText">Contact Us</a>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;