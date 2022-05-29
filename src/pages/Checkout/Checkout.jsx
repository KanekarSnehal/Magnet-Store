import React from "react";
import { Header } from "../../components";
import { useUserData } from "../../context";
import "./checkout.css";

export const Checkout = () => {
  const {
    userState: {
      userAddress: { addresses },
    },
  } = useUserData();
  return (
    <>
      <Header />
      <div className="checkout-container">
        <div className="address-page-container">
          {addresses &&
            addresses.map((address) => (
              <AddressCard address={address} key={address._id} />
            ))}
        </div>
        <div>bill</div>
      </div>
    </>
  );
};
