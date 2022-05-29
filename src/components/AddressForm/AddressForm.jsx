import React, { useEffect } from "react";
import "./address-form.css";
import { useAddress } from "../../context";
import { useAddressHandler } from "../../hooks";

export const AddressForm = () => {
  const { setShowAddressModal, editAddress } = useAddress();
  const {
    formData,
    formDispatch,
    errorData,
    errorDispatch,
    addAddressHandler,
    editAddressHandler,
  } = useAddressHandler();

  useEffect(() => {
    if (editAddress) {
      formDispatch({ type: "INITIALISE_ADDRESS", payload: editAddress });
    }
  }, []);

  return (
    <div className="overlay" onClick={() => setShowAddressModal(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="address-form-container">
          <i
            className="fa-solid fa-xmark modal-close"
            onClick={() => setShowAddressModal(false)}
          ></i>
          <h5>ADD NEW ADDRESS</h5>
          <input
            className="form-field"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) =>
              formDispatch({ type: "INPUT_NAME", payload: e.target.value })
            }
            required
          />

          <input
            className="form-field"
            type="text"
            placeholder="Enter house no, street colony"
            value={formData.street}
            onChange={(e) =>
              formDispatch({ type: "INPUT_STREET", payload: e.target.value })
            }
            required
          />
          <input
            className="form-field"
            type="text"
            placeholder="Enter city"
            value={formData.city}
            onChange={(e) =>
              formDispatch({ type: "INPUT_CITY", payload: e.target.value })
            }
            required
          />
          <select
            className="form-field"
            typeof="select"
            value={formData.state}
            onChange={(e) =>
              formDispatch({ type: "INPUT_STATE", payload: e.target.value })
            }
            required
          >
            <option value="Maharashtra">Maharashtra</option>
            <option value="Goa">Goa</option>
            <option value="Karnataka">Karnataka</option>
            <option vlaue="Gujarat">Gujarat</option>
          </select>

          <input
            className="form-field"
            type="number"
            placeholder="Enter zip code"
            value={formData.zipCode}
            onChange={(e) =>
              formDispatch({ type: "INPUT_ZIPCODE", payload: e.target.value })
            }
            required
          />
          <input
            className="form-field"
            type="number"
            placeholder="Enter mobile number"
            value={formData.mobile}
            onChange={(e) =>
              formDispatch({ type: "INPUT_MOBILE", payload: e.target.value })
            }
            required
          />
          <div className="btn-container">
            <button
              className="btn primary-btn"
              onClick={() =>
                editAddress ? editAddressHandler() : addAddressHandler()
              }
            >
              Save
            </button>
            <button
              className="btn outline-secondary-btn"
              onClick={() => {
                formDispatch({ type: "FILL_DUMMY_DATA" });
              }}
            >
              Fill with Dummy Address
            </button>
            <button
              className="btn outline-secondary-btn"
              onClick={() => setShowAddressModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
