import axios from "axios";
import { ordersUrl, getConfig } from "./helpers";

export const getOrderItems = async (userDispatch) => {
  try {
    const { data } = await axios.get(ordersUrl, getConfig());
    userDispatch({ type: "GET_ORDER_ITEMS", payload: data.orders });
  } catch (e) {
    console.log(e);
  }
};

export const addItemToOrders = async (order, userDispatch) => {
  try {
    const { data } = await axios.post(ordersUrl, { order }, getConfig());
    userDispatch({ type: "ADD_ORDER_ITEM", payload: data.orders });
  } catch (e) {
    console.log(e);
  }
};
