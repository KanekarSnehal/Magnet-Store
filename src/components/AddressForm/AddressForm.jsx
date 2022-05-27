import React from "react";
import reactDom from "react-dom";
import "./address-form.css";

export const AddressForm = ({ setShowAddressForm }) => {
  return (
    <div className="overlay">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="address-form-container">
          <i
            className="fa-solid fa-xmark modal-close"
            onClick={() => setShowAddressForm(false)}
          ></i>
          <h5>ADD NEW ADDRESS</h5>
          <select className="form-field">
            <option value="India">India</option>
            <option value="London">London</option>
          </select>
          <input
            className="form-field"
            type="text"
            placeholder="Enter your name"
          />
          <input
            className="form-field"
            type="text"
            placeholder="Enter house no, street colony"
          />
          <input className="form-field" type="text" placeholder="Enter city" />
          <select className="form-field">
            <option value="Maharashtra">Maharashtra</option>
            <option value="Goa">Goa</option>
          </select>
          <input
            className="form-field"
            type="number"
            placeholder="Enter zip code"
          />
          <input
            className="form-field"
            type="number"
            placeholder="Enter mobile number"
          />
          <div className="btn-container">
            <button className="btn primary-btn">Save</button>
            <button className="btn outline-secondary-btn">
              Fill with Dummy Address
            </button>
            <button className="btn outline-secondary-btn">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};
