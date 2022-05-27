import axios from "axios";
import React, { useState, useEffect } from "react";
import { AddressSelectList } from "../index";
import "./address-card.css";

export const AddressCard = () => {
  const [showList, setShowList] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addresses, setAddresses] = useState([]);

  const encodedToken = localStorage.getItem("token");
  useEffect(async () => {
    try {
      const { data } = await axios.get("api/user/address", {
        headers: { authorization: encodedToken },
      });
      setAddresses(data.addressList);
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <>
      <div className="address-card-container">
        <div className="display-flex-row">
          <span>Deliver to:</span>
          <span className="mx-8">John Doe </span>
          <span>400078</span>

          <button
            className="btn-special ml-auto outline-secondary-btn"
            onClick={() => setShowList(true)}
          >
            Change
          </button>
        </div>

        <div className="my-8">
          Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016
        </div>
      </div>
      {showList && (
        <AddressSelectList
          setShowList={setShowList}
          setSelectedAddress={setSelectedAddress}
        />
      )}
    </>
  );
};
