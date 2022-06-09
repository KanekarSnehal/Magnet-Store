import axios from "axios";
import { ordersUrl, getConfig } from "./helpers";
import toast from "react-hot-toast";

export const getOrderItems = async (userDispatch) => {
  try {
    const { data } = await axios.get(ordersUrl, getConfig());
    userDispatch({ type: "GET_ORDER_ITEMS", payload: data.orders });
  } catch (e) {
    toast.error(e?.response?.data?.message);
  }
};

export const addItemToOrders = async (order, userDispatch) => {
  try {
    const { data } = await axios.post(ordersUrl, { order }, getConfig());
    userDispatch({ type: "ADD_ORDER_ITEM", payload: data.orders });
    toast.success("Yayyy! Order confirmed succesfully");
    console.log(data.orders);
  } catch (e) {
    toast.error(e?.response?.data?.message);
  }
};
