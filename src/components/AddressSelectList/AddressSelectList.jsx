import React, { useState } from "react";
import reactDom from "react-dom";
import "./address-select-list.css";
import { Address, AddressForm } from "../index";

const address = [
  {
    name: "John Doe",
    country: "India",
    houseNo: "1211",
    city: "Mumbai",
    state: "Maharashtra",
    zipcode: 400078,
    mobileNo: 5328401384,
  },
  {
    name: "John Doe",
    country: "India",
    houseNo: "1211",
    city: "Mumbai",
    state: "Maharashtra",
    zipcode: 400078,
    mobileNo: 5328401384,
  },
];
export const AddressSelectList = ({ setShowList, setSelectedAddress }) => {
  const [showAddressForm, setShowAddressForm] = useState(false);
  return reactDom.createPortal(
    <>
      <div className="overlay" onClick={() => setShowList(false)}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <i
            className="fa-solid fa-xmark modal-close"
            onClick={() => setShowList(false)}
          ></i>
          {address?.map((add) => (
            <Address address={add} key={add} setSelectedAddress={setSelectedAddress}/>
          ))}
          <button
            className="btn outline-secondary-btn"
            onClick={() => setShowAddressForm(true)}
          >
            ADD NEW ADDRESS
          </button>
        </div>
      </div>
      {showAddressForm && (
        <AddressForm setShowAddressForm={setShowAddressForm} />
      )}
    </>,
    document.getElementById("address-list-root")
  );
};
