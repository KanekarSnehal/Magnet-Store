import React from "react";
import "./Home.css";
import { Categories, Brands } from "../../components/index";
import { Link } from "react-router-dom";
import { Header } from "../../components/index";
export function Home() {
  return (
    <div>
      <Header />
      <main className="main-container">
        <div className="hero-container">
          <div className="content">
            <h1>Unveiling the new</h1>
            <p>UPTO 80% OFF on various products</p>
            <Link to="products">
              <button className="btn primary-btn">Shop Now</button>
            </Link>
          </div>
        </div>
        <div className="spacer-3rem "></div>
        <div className="spacer-3rem "></div>
        <div className="homepage-container">
          <Categories />
          <div className="spacer-3rem "></div>
          <div className="spacer-3rem "></div>
          <Brands />
        </div>
      </main>
    </div>
  );
}
