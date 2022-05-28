import { addressUrl, getConfig } from "./helpers";
import axios from "axios";
import { addressConstants } from "../reducer";

export const getAddresses = (userDispatch) => {
  try {
    userDispatch({ type: addressConstants.ADDRESS_LOADING });
    const { data } = axios.get(addressUrl, getConfig());
    userDispatch({
      type: addressConstants.GET_ADDRESSES,
      payload: data.address,
    });
    userDispatch({ type: addressConstants.ADDRESS_LOADING });
  } catch (e) {
    console.log(e);
  }
};

export const addAddress = (address, userDispatch) => {
  try {
    const { data } = axios.post(`${addressUrl}`, { address }, getConfig());
    userDispatch({ type: addressConstants.ADD_ADDRESS, payload: data.address });
  } catch (e) {
    console.log(e);
  }
};

export const removeAddress = (addressId, userDispatch) => {
  try {
    const { data } = axios.delete(`${addressUrl}/${addressId}`, getConfig());
    userDispatch({
      type: addressConstants.REMOVE_ADDRESS,
      payload: data.address,
    });
  } catch (e) {
    console.log(e);
  }
};

export const updateAddress = (addressId, address, userDispatch) => {
  try {
    const { data } = axios.post(
      `${addressUrl}/${addressId}`,
      { address },
      getConfig()
    );
    userDispatch({
      type: addressConstants.UPDATE_ADDRESS,
      payload: data.address,
    });
  } catch (e) {
    console.log(e);
  }
};
