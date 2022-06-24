import { useReducer } from "react";
import { addAddress, updateAddress } from "../services/address";
import { useUserData, useAddress } from "../context";

export const useAddressHandler = () => {
  const { userDispatch } = useUserData();
  const { editAddress, setEditAddress, setShowAddressModal } = useAddress();

  const initialState = {
    name: "",
    street: "",
    city: "",
    state: "Maharashtra",
    zipCode: "",
    mobile: "",
  };

  const initialErrorState = {
    name: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    mobile: "",
  };

  const formReducer = (state, action) => {
    switch (action.type) {
      case "INPUT_NAME":
        return { ...state, name: action.payload };
      case "INPUT_STREET":
        return { ...state, street: action.payload };
      case "INPUT_CITY":
        return { ...state, city: action.payload };
      case "INPUT_STATE":
        return { ...state, state: action.payload };
      case "INPUT_ZIPCODE":
        return { ...state, zipCode: action.payload };
      case "INPUT_MOBILE":
        return { ...state, mobile: action.payload };
      case "FILL_DUMMY_DATA":
        return {
          ...state,
          name: "Karen Brewer",
          street: "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar",
          city: "Mumbai",
          state: "Maharashtra",
          zipCode: "400078",
          mobile: "7836287749",
        };
      case "INITIALISE_ADDRESS":
        return {
          ...state,
          name: action.payload.name,
          street: action.payload.street,
          city: action.payload.city,
          state: action.payload.state,
          zipCode: action.payload.zipCode,
          mobile: action.payload.mobile,
        };
      case "SET_INITIAL_VALUE":
        return {
          ...state,
          name: "",
          street: "",
          city: "",
          state: "Maharashtra",
          zipCode: "",
          mobile: "",
        };
    }
  };

  const errorReducer = (state, action) => {
    switch (action.type) {
      case "ERROR_NAME":
        return {
          ...state,
          name: action.payload,
        };
      case "ERROR_STREET":
        return {
          ...state,
          street: action.payload,
        };
      case "ERROR_CITY":
        return {
          ...state,
          city: action.payload,
        };
      case "ERROR_STATE":
        return {
          ...state,
          state: action.payload,
        };
      case "ERROR_ZIPCODE":
        return {
          ...state,
          zipCode: action.payload,
        };
      case "ERROR_MOBILE":
        return {
          ...state,
          mobile: action.payload,
        };
      case "CLEAR_ERROR":
        return {
          name: "",
          street: "",
          city: "",
          state: "",
          zipCode: "",
          mobile: "",
        };
    }
  };

  const [formData, formDispatch] = useReducer(formReducer, initialState);

  const [errorData, errorDispatch] = useReducer(
    errorReducer,
    initialErrorState
  );

  const checkValidation = () => {
    let addressFlag = true;

    if (!new RegExp("[A-Za-z]+").test(formData.name)) {
      errorDispatch({
        type: "ERROR_NAME",
        payload: "Name should have only letters",
      });
      addressFlag = false;
    }

    if (formData.street.trim() === "") {
      errorDispatch({
        type: "ERROR_STREET",
        payload: "Enter valid street details",
      });
      addressFlag = false;
    }

    if (formData.city.trim() === "") {
      errorDispatch({
        type: "ERROR_CITY",
        payload: "Enter valid city details",
      });
      addressFlag = false;
    }

    if (
      !new RegExp("[0-9]{6}").test(formData.zipCode) ||
      formData.zipCode.length != 6
    ) {
      errorDispatch({
        type: "ERROR_ZIPCODE",
        payload: "Enter valid zipcode",
      });
      addressFlag = false;
    }

    if (
      !new RegExp("[0-9]{10,10}").test(formData.mobile) ||
      formData.mobile.length != 10
    ) {
      errorDispatch({
        type: "ERROR_MOBILE",
        payload: "Enter valid mobile number",
      });
      addressFlag = false;
    }

    return addressFlag;
  };

  const addAddressHandler = () => {
    if (checkValidation()) {
      addAddress(formData, userDispatch);
      formDispatch({ type: "SET_INITIAL_VALUE" });
      setShowAddressModal(false);
    }
  };

  const editAddressHandler = () => {
    if (checkValidation()) {
      updateAddress(editAddress._id, formData, userDispatch);
      setEditAddress(null);
      setShowAddressModal(false);
    }
  };

  return {
    formData,
    formDispatch,
    errorData,
    errorDispatch,
    addAddressHandler,
    editAddressHandler,
  };
};
