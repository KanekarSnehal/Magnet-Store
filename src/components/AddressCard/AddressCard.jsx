import React from "react";
import "./address.css";
import { useAddress, useUserData } from "../../context";
import { removeAddress } from "../../services/address";

export const AddressCard = ({ address, isCheckout }) => {
  const { setShowAddressModal, setEditAddress } = useAddress();
  const { userDispatch } = useUserData();

  return (
    <div className="address-container">
      {isCheckout && <input type="radio" className="input-checkbox" />}
      <span className="text-container">
        <p className="text-bold-weight">{address.name}</p>
        <p>{address.street}</p>
        <p>{address.city}</p>
        <p>{address.state}</p>
        <p>{address.zipCode}</p>
        <p>Phone number: {address.mobile}</p>
        {!isCheckout && (
          <div>
            <button
              className="btn primary-btn"
              onClick={() => {
                setShowAddressModal(true);
                setEditAddress(address);
              }}
            >
              Edit
            </button>
            <button
              className="btn outline-secondary-btn"
              onClick={() => removeAddress(address._id, userDispatch)}
            >
              Remove
            </button>
          </div>
        )}
      </span>
    </div>
  );
};
