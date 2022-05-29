import { addressUrl, getConfig } from "./helpers";
import axios from "axios";
import { addressConstants } from "../reducer";

export const getAddresses = (userDispatch) => {
  try {
    userDispatch({ type: addressConstants.ADDRESS_LOADING });
    const { data } = axios.get(addressUrl, getConfig());
    userDispatch({
      type: addressConstants.GET_ADDRESSES,
      payload: data.addressList,
    });
    userDispatch({ type: addressConstants.ADDRESS_LOADING });
  } catch (e) {
    console.log(e);
  }
};

export const addAddress = async (address, userDispatch) => {
  try {
    const { data } = await axios.post(
      `${addressUrl}`,
      { address },
      getConfig()
    );
    userDispatch({
      type: addressConstants.ADD_ADDRESS,
      payload: data.addressList,
    });
  } catch (e) {
    console.log(e);
  }
};

export const removeAddress = async (addressId, userDispatch) => {
  try {
    const { data } = await axios.delete(
      `${addressUrl}/${addressId}`,
      getConfig()
    );
    userDispatch({
      type: addressConstants.REMOVE_ADDRESS,
      payload: data.addressList,
    });
  } catch (e) {
    console.log(e);
  }
};

export const updateAddress = async (addressId, address, userDispatch) => {
  try {
    const { data } = await axios.post(
      `${addressUrl}/${addressId}`,
      { address },
      getConfig()
    );
    userDispatch({
      type: addressConstants.UPDATE_ADDRESS,
      payload: data.addressList,
    });
  } catch (e) {
    console.log(e);
  }
};
