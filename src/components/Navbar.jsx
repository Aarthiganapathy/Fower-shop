import React from "react";
import "./Navbar.css";

const Icon = ({ children }) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor"
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const Logo = () => (
  <Icon>
    <circle cx="12" cy="12" r="2.2" />
    <path d="M12 9.8C10.6 7.6 10.8 4.8 12 3c1.2 1.8 1.4 4.6 0 6.8zM12 14.2c1.4 2.2 1.2 5 0 6.8-1.2-1.8-1.4-4.6 0-6.8zM9.8 12C7.6 10.6 4.8 10.8 3 12c1.8 1.2 4.6 1.4 6.8 0zM14.2 12c2.2 1.4 5 1.2 6.8 0-1.8-1.2-4.6-1.4-6.8 0z" />
  </Icon>
);

const Navbar = () => (
  <header className="nav">
    <a href="/" className="nav-logo"><Logo /><span>Flower Shop</span></a>
    <nav className="nav-links" aria-label="Main">
      <a href="/" className="active">Home</a>
      <a href="/shop">Shop</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
    <div className="nav-actions">
      <button aria-label="Search">
        <Icon><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></Icon>
      </button>
      <button aria-label="Cart">
        <Icon><path d="M3.5 4h2.2l2 11h10.1l1.9-7.5H6.6" /><circle cx="9.5" cy="19" r="1.2" /><circle cx="17" cy="19" r="1.2" /></Icon>
      </button>
    </div>
  </header>
);

export default Navbar;