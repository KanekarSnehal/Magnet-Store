import React from "react";
// import icon from "../../assets/icon.png";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header-container">
      <Link to="/" className="logo-container">
        <img src="icon.png" alt="logo" className="brand-logo" />
        <span className="brand-name">Magnet Store </span>
      </Link>
      <div className="header-links mx-auto">
        <ul className="list-style-none inline-list">
          <li className="secondary-text-color mr-64">
            <Link to="/" className="active-link">
              Home
            </Link>
          </li>
          <li className="secondary-text-color mr-64">
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>

      <div className="search-input mx-auto">
        <a className="fas fa-search search-icon"></a>
        <label for="searchbar"></label>
        <input
          className="input-round input-sm"
          type="text"
          name="searchbar"
          id="searchbar"
          placeholder="Search products..."
        />
      </div>

      <div className="header-icons ml-auto mr-16">
        <Link to="/signup">
          <i
            href="/pages/sign-up.html"
            class="far fa-user number-badge-iframe"
          ></i>
        </Link>

        <div className="position-relative">
          <Link to="/whishlist">
            <i className="far fa-heart number-badge-iframe"></i>
          </Link>
          <div className="badge badge-status-busy badge-md-size badge-number">
            4
          </div>
        </div>

        <div className="position-relative">
          <Link to="/cart">
            <i className="fas fa-shopping-bag number-badge-iframe"></i>
          </Link>
          <div className="badge badge-status-busy badge-md-size badge-number">
            4
          </div>
        </div>
        <button className="btn primary-btn">Logout</button>
      </div>
    </header>
  );
}
