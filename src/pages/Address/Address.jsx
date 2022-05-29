import React from "react";
import "./address.css";
import { useAddress, useUserData } from "../../context";
import { AddressCard, AddressForm } from "../../components";

export const Address = () => {
  const {
    userState: {
      userAddress: { addresses },
    },
  } = useUserData();
  const { showAddressModal, setShowAddressModal } = useAddress();

  return (
    <div className="address-page-container">
      {addresses &&
        addresses.map((address) => (
          <AddressCard address={address} key={address._id} />
        ))}
      <button
        className="btn primary-btn"
        onClick={() => setShowAddressModal(true)}
      >
        + ADD ADDRESS
      </button>
      {showAddressModal && <AddressForm />}
    </div>
  );
};
