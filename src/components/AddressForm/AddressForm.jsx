import React, { useEffect } from "react";
import "./address-form.css";
import { useAddress } from "../../context";
import { useAddressHandler } from "../../hooks";
import { IoIosAlert } from "react-icons/io";

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

          <div>
            <input
              className="form-field"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) =>
                formDispatch({ type: "INPUT_NAME", payload: e.target.value })
              }
              onFocus={() => errorDispatch({ type: "ERROR_NAME", payload: "" })}
            />
            {errorData.name.length > 0 && (
              <div className="error-message">
                <IoIosAlert className="error-icon" />
                <span>{errorData.name}</span>
              </div>
            )}
          </div>
          <div>
            <input
              className="form-field"
              type="text"
              placeholder="Enter house no, street colony"
              value={formData.street}
              onChange={(e) =>
                formDispatch({
                  type: "INPUT_STREET",
                  payload: e.target.value,
                })
              }
              onFocus={() =>
                errorDispatch({ type: "ERROR_STREET", payload: "" })
              }
            />
            {errorData.street.length > 0 && (
              <div className="error-message">
                <IoIosAlert className="error-icon" />
                <span>{errorData.street}</span>
              </div>
            )}
          </div>
          <div>
            <input
              className="form-field"
              type="text"
              placeholder="Enter city"
              value={formData.city}
              onChange={(e) =>
                formDispatch({ type: "INPUT_CITY", payload: e.target.value })
              }
              onFocus={() => errorDispatch({ type: "ERROR_CITY", payload: "" })}
            />
            {errorData.city.length > 0 && (
              <div className="error-message">
                <IoIosAlert className="error-icon" />
                <span>{errorData.city}</span>
              </div>
            )}
          </div>

          <select
            className="form-field"
            typeof="select"
            value={formData.state}
            onChange={(e) =>
              formDispatch({ type: "INPUT_STATE", payload: e.target.value })
            }
          >
            <option value="Maharashtra">Maharashtra</option>
            <option value="Goa">Goa</option>
            <option value="Karnataka">Karnataka</option>
            <option vlaue="Gujarat">Gujarat</option>
          </select>

          <div>
            <input
              className="form-field"
              type="number"
              placeholder="Enter zip code"
              value={formData.zipCode}
              onChange={(e) =>
                formDispatch({
                  type: "INPUT_ZIPCODE",
                  payload: e.target.value,
                })
              }
              onFocus={() =>
                errorDispatch({ type: "ERROR_ZIPCODE", payload: "" })
              }
            />
            {errorData.zipCode.length > 0 && (
              <div className="error-message">
                <IoIosAlert className="error-icon" />
                <span>{errorData.zipCode}</span>
              </div>
            )}
          </div>

          <div>
            <input
              className="form-field"
              type="tel"
              pattern="[0-9]{10}"
              placeholder="Enter mobile number"
              value={formData.mobile}
              onChange={(e) =>
                formDispatch({
                  type: "INPUT_MOBILE",
                  payload: e.target.value,
                })
              }
              onFocus={() =>
                errorDispatch({ type: "ERROR_MOBILE", payload: "" })
              }
            />
            {errorData.mobile.length > 0 && (
              <div className="error-message">
                <IoIosAlert className="error-icon" />
                <span>{errorData.mobile}</span>
              </div>
            )}
          </div>

          <div className="btn-container">
            <button
              className="btn primary-btn"
              onClick={() => {
                editAddress ? editAddressHandler() : addAddressHandler();
                setShowAddressModal(false);
              }}
            >
              Save
            </button>
            <button
              className="btn outline-secondary-btn"
              onClick={() => {
                formDispatch({ type: "FILL_DUMMY_DATA" });
                errorDispatch({ type: "CLEAR_ERROR" });
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
