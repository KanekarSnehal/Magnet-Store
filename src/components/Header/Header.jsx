import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useFilter } from "../../context/index";
import { useAuthContext } from "../../context/index";
import { useNavigate } from "react-router-dom";
import { useWishlist, useCart } from "../../context/index";
import "./header.css";

export function Header() {
  const { filterDispatch } = useFilter();
  const { isAuthenticated, authDispatch } = useAuthContext();
  const { wishlist } = useWishlist();
  const { cart, cartDispatch } = useCart();
  const navigate = useNavigate();
  const [showSideMenu, setShowSideMenu] = useState(false);
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
          <li className="secondary-text-color mx-16">
            <Link
              to="/"
              className={location.pathname === "/" ? "active-link" : ""}
            >
              Home
            </Link>
          </li>
          <li className="secondary-text-color mx-16">
            <Link
              to="/products"
              className={location.pathname === "/products" ? "active-link" : ""}
            >
              Products
            </Link>
          </li>
        </ul>
      </div>

      <div className="search-input mx-16">
        <i
          className="fas fa-search search-icon"
          onClick={() => navigate("/products")}
        ></i>
        <label htmlFor="searchbar"></label>
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

      <div className="header-icons ml-auto ">
        <Link to={"/signup"}>
          <i
            href="/pages/sign-up.html"
            className="far fa-user number-badge-iframe"
          ></i>
        </Link>

        <div className="position-relative">
          <Link to={"/wishlist"}>
            <i
              className={
                location.pathname === "/wishlist"
                  ? "far fa-heart number-badge-iframe active-icons"
                  : "far fa-heart number-badge-iframe"
              }
            ></i>
          </Link>
          <div className="badge badge-status-busy badge-md-size badge-number">
            {wishlist.length}
          </div>
        </div>

        <div className="position-relative">
          <Link to={"/cart"}>
            <i
              className={
                location.pathname === "/cart"
                  ? "fas fa-shopping-bag number-badge-iframe active-icons"
                  : "fas fa-shopping-bag number-badge-iframe"
              }
            ></i>
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

      {showSideMenu && (
        <div className="side-menu">
          <i
            className="bx bx-x number-badge-iframe badge mx-8 my-8"
            onClick={() => setShowSideMenu(!showSideMenu)}
          ></i>
          <div className="side-menu-content">
            <Link to={"/"}>
              <i
                className={
                  location.pathname === "/"
                    ? "bx bx-home number-badge-iframe active-icons"
                    : "bx bx-home number-badge-iframe "
                }
              >
                Home
              </i>
            </Link>
            <NavLink to={"/signup"}>
              <i className={"far fa-user number-badge-iframe"}>Profile</i>
            </NavLink>
            <div className="position-relative">
              <Link to={"/wishlist"}>
                <i
                  className={
                    location.pathname === "/wishlist"
                      ? "bx bx-heart number-badge-iframe active-icons"
                      : "bx bx-heart number-badge-iframe"
                  }
                >
                  Wishlist
                </i>
              </Link>
              <div className="badge badge-status-busy badge-md-size badge-number">
                {wishlist.length}
              </div>
            </div>

            <div className="position-relative">
              <Link to={"/cart"}>
                <i
                  className={
                    location.pathname === "/cart"
                      ? "bx bx-cart-alt number-badge-iframe active-icons"
                      : "bx bx-cart-alt number-badge-iframe"
                  }
                >
                  Cart
                </i>
              </Link>

              <div className="badge badge-status-busy badge-md-size badge-number">
                {cart.length}
              </div>
            </div>
          </div>
        </div>
      )}

      <i
        className="bx bx-menu number-badge-iframe ml-auto hamburger-menu"
        onClick={() => setShowSideMenu(!showSideMenu)}
      ></i>
    </header>
  );
}
