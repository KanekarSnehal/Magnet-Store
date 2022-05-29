import React from "react";
import { useUserData, useAuthContext } from "../context";
import { useCartDetails } from "./useCartDetails";
import { addItemToOrders } from "../services";
import { clearCart } from "../services/cart";
import { useNavigate } from "react-router-dom";

export const usePaymentIntegration = () => {
  const {
    userState: {
      userCart: { cart },
    },
    userDispatch,
    orderAddress,
    setOrderAddress,
  } = useUserData();
  const {
    authState: { authUser },
  } = useAuthContext();
  const navigate = useNavigate();
  const { getTotalAmount } = useCartDetails();
  const finalAmount = getTotalAmount();

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount: finalAmount * 100,
      currency: "INR",
      name: "Magnet Store",
      description: "Thank you for shopping with us",
      image:
        "https://res.cloudinary.com/dflebgpde/image/upload/v1653854143/crockery_et8yue.png",

      handler: async function (response) {
        const paymentId = response.razorpay_payment_id;

        const order = {
          paymentId,
          amountPaid: finalAmount,
          orderedProducts: [...cart],
          deliveryAddress: { ...orderAddress },
        };
        await addItemToOrders(order, userDispatch);
        await clearCart(userDispatch);
        setOrderAddress(null);
        navigate("/profile/orders");
      },
      prefill: {
        name: orderAddress.name,
        email: authUser.email,
        contact: orderAddress.mobile,
      },
      notes: {
        address: `${orderAddress?.name}, ${orderAddress?.street}, ${orderAddress?.city}, ${orderAddress?.zipCode}`,
      },
      theme: {
        color: "#253053",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.on("payment.failed", function (response) {
      alert("Something went wrong! Please try again later");
    });
    paymentObject.open();
  }

  return { loadScript, displayRazorpay };
};
