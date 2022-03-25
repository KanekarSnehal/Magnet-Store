import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useFilter } from "../../context/index";
import { useAuthContext } from "../../context/index";
import { useNavigate } from "react-router-dom";
import { useWishlist, useCart } from "../../context/index";

export function Header() {
  const { filterDispatch } = useFilter();
  const { isAuthenticated, authDispatch } = useAuthContext();
  const { wishlist } = useWishlist();
  const { cart, cartDispatch } = useCart();
  const navigate = useNavigate();

  const logoutHandler = (e) => {
    authDispatch({ type: "USER_LOGOUT" });
    localStorage.removeItem("token");
  };

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
          onChange={(e) =>
            filterDispatch({ type: "SEARCH_BY_KEY", payload: e.target.value })
          }
        />
      </div>

      <div className="header-icons ml-auto mr-16">
        <Link to={"/signup"}>
          <i
            href="/pages/sign-up.html"
            class="far fa-user number-badge-iframe"
          ></i>
        </Link>

        <div className="position-relative">
          <Link to={"/wishlist"}>
            <i className="far fa-heart number-badge-iframe"></i>
          </Link>
          <div className="badge badge-status-busy badge-md-size badge-number">
            {wishlist.length}
          </div>
        </div>

        <div className="position-relative">
          <Link to={"/cart"}>
            <i className="fas fa-shopping-bag number-badge-iframe"></i>
          </Link>
          <div className="badge badge-status-busy badge-md-size badge-number">
            {cart.length}
          </div>
        </div>
        {isAuthenticated ? (
          <button className="btn primary-btn" onClick={logoutHandler}>
            Logout
          </button>
        ) : (
          <button
            className="btn primary-btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
}
