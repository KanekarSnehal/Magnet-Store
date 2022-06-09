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
      <button
        className="btn primary-btn"
        onClick={() => setShowAddressModal(true)}
      >
        + ADD ADDRESS
      </button>
      {addresses &&
        addresses.map((address) => (
          <AddressCard address={address} key={address._id} />
        ))}
      {showAddressModal && <AddressForm />}
    </div>
  );
};
