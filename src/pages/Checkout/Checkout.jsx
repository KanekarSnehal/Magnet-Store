import React from "react";
import { Header, AddressCard } from "../../components";
import { useUserData } from "../../context";
import "./checkout.css";
import { cartDetailsCalculator } from "../../components/CartBillBoard/helper";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const {
    userState: {
      userCart: { cart },
      userAddress: { addresses },
    },
  } = useUserData();
  const { totalMRP, discountOnMRP, quantity } = cartDetailsCalculator(cart);
  const totalAmount = totalMRP - discountOnMRP;
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="checkout-container">
        <div className="address-page-container">
          {addresses.length !== 0 ? (
            addresses.map((address) => (
              <AddressCard address={address} key={address._id} isCheckout />
            ))
          ) : (
            <button
              className="btn primary-btn"
              onClick={() => navigate("/profile/address")}
            >
              Add new Address
            </button>
          )}
        </div>
        <div className="checkout-summary-container">
          <div className="checkout-items">
            <h6>ITEMS PURCHASED</h6>
            <div className="filter-divider-line"></div>
            <div className="items-row">
              <span>ITEM</span>
              <span>PRICE</span>
            </div>
            {cart?.map((cartItem) => (
              <div className="items-row" key={cartItem._id}>
                <div>
                  <div>{cartItem.title}</div>
                  <div> {`${cartItem.qty} X ₹ ${cartItem.price}`}</div>
                </div>
                <span>₹ {Number(cartItem.qty) * Number(cartItem.price)}</span>
              </div>
            ))}
          </div>
          <div className="checkout-items">
            <h6>PRICE DETAILS</h6>
            <div className="filter-divider-line"></div>
            <div className="text-bold-weight">
              PRICE DETAILS: ({quantity} items)
            </div>
            <div className="items-row">
              <span>Total MRP</span>
              <span>₹ {totalMRP}</span>
            </div>
            <div className="items-row">
              <span>Discount on MRP</span>
              <span className="primary-text-color">-₹ {discountOnMRP}</span>
            </div>
            <div className="items-row">
              <span>Convenience Fee</span>
              <span className="primary-text-color">
                <span className="text-strike-through">₹ 49</span> FREE
              </span>
            </div>
            <div className="filter-divider-line"></div>
            <div className="items-row text-bold-weight">
              <span>Total Amount</span>
              <span className="secondary-text-color">₹ {totalAmount}</span>
            </div>
          </div>
          <div className="checkout-summary-container">
            <h6>DELIVER TO</h6>
            <div className="filter-divider-line"></div>
            <span className="text-container">
              <p className="text-bold-weight">Snehal kanekar</p>
              <p>kokan nagar</p>
              <p>mumbai</p>
              <p>Maharashtra</p>
              <p>400078</p>
              <p>Phone number: 7506873127</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
