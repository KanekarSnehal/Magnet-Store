import React, { useEffect, useState } from "react";
import { Header, Loader } from "../../components";
import "./single-product-page.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuthContext, useUserData } from "../../context/index";
import { addToWishlist, removeFromWishlist, addToCart } from "../../services";
import { useNavigate } from "react-router-dom";

export const SingleProductPage = () => {
  const { productId } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const {
    userState: {
      userWishlist: { wishlist },
      userCart: { cart },
    },
    userDispatch,
  } = useUserData();
  const {
    authState: { authToken },
  } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/api/products/${productId}`);
        setSingleProduct(data.product);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [productId]);

  return !loading ? (
    <>
      <Header />
      <div className="single-product-page-container">
        <img src={singleProduct?.img} className="product-image" />
        <div className="product-details">
          <h4>{singleProduct?.title}</h4>
          <div>
            <span className="sold-by">Sold By:</span>
            <span className="product-brand">{singleProduct?.brandName}</span>
          </div>

          <p className="product-info">{singleProduct?.description}</p>
          <p className="text-bold-weight p-rg">
            Rs.
            {Number(singleProduct?.price) -
              (Number(singleProduct?.price) * Number(singleProduct?.discount)) /
                100}
            <span className="text-light-weight">
              <span className="text-strike-through mx-16">
                Rs.{singleProduct?.price}
              </span>
            </span>
            <span className="primary-text-color">
              {singleProduct?.discount} % OFF
            </span>
            <span className="card-rating">
              {singleProduct?.ratings}
              <i className="fa-solid fa-star p-sm rating-icon"></i>
            </span>
          </p>
          <div className="filter-divider-line"></div>

          <ul className="list-style-none styled-list my-8">
            {singleProduct?.fastDelivery && (
              <li className="tertiary-text-color body-cp-md">
                <i className="fas fa-truck flip-image feature-icon mr-16"></i>
                <span>Fast delivery available</span>
              </li>
            )}

            <li className="tertiary-text-color">
              <i className="fas fa-check-square feature-icon mr-16"></i>
              <span>Price displayed is inclusive of GST</span>
            </li>

            <li className="tertiary-text-color body-cp-md">
              <i
                className={
                  singleProduct?.inStock
                    ? "far fa-calendar-check feature-icon mr-16"
                    : "far fa-calendar-times feature-icon mr-16"
                }
              ></i>
              <span>
                {singleProduct?.inStock ? "Currently in stock" : "Out of stock"}
              </span>
            </li>
          </ul>
          <div className="single-product-btn">
            {cart.find((cartItem) => cartItem._id === singleProduct._id) ? (
              <button
                className="btn primary-btn mr-16"
                onClick={() => navigate("/cart")}
              >
                Go to cart
              </button>
            ) : singleProduct.inStock ? (
              <button
                className="btn primary-btn mr-16"
                onClick={() => {
                  authToken
                    ? addToCart(singleProduct, userDispatch)
                    : navigate("/login");
                }}
              >
                <i className="fas fa-shopping-cart mr-16 "></i>Add to cart
              </button>
            ) : (
              <button className="btn primary-btn mr-16" disabled>
                <i className="fas fa-shopping-cart mr-16 "></i>Out of Stock
              </button>
            )}

            {wishlist.find(
              (wishlistItem) => wishlistItem._id === singleProduct._id
            ) ? (
              <button
                className="btn outline-secondary-btn mr-16"
                onClick={() =>
                  removeFromWishlist(singleProduct._id, userDispatch)
                }
              >
                <i className="far fa-heart mr-16"></i>
                Remove from wishlist
              </button>
            ) : (
              <button
                className="btn outline-secondary-btn mr-16"
                onClick={() => {
                  authToken
                    ? addToWishlist(singleProduct, userDispatch)
                    : navigate("/login");
                }}
              >
                <i className="far fa-heart mr-16"></i>
                Add to wishlist
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  ) : (
    <Loader />
  );
};
