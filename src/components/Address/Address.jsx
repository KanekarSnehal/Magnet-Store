import React from "react";
import "./address.css";

export const Address = ({ setSelectedAddress }) => {
  return (
    <div className="address-container my-16 py-8 pr-8">
      <input type="radio" className="input-checkbox my-8" />
      <span className="text-container">
        <p>John Doe</p>
        <p>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Mumbai-400058</p>
        <p>Mumbai, Maharashtra</p>
        <p>India</p>
        <p>Phone number: 3394894830</p>
        <div>
          <button className="btn primary-btn">Edit</button>
          <button className="btn outline-secondary-btn">Remove</button>
        </div>
      </span>
    </div>
  );
};
