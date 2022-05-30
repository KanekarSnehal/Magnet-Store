import React from "react";
import { Link } from "react-router-dom";
import "./order.css";
import { useUserData } from "../../context";
import { Loader } from "../../components";

export const Orders = () => {
  const {
    userState: {
      userOrders: { orders, loading },
    },
  } = useUserData();

  return (
    <div className="order-page-container">
      {loading ? (
        <Loader />
      ) : orders.length === 0 ? (
        <h4>No orders yet</h4>
      ) : (
        <>
          <h5>My Orders</h5>
          <div className="order-container">
            {orders.map(
              ({
                amountPaid,
                deliveryAddress,
                createdAt,
                orderedProducts,
                paymentId,
                _id,
              }) => (
                <>
                  <div className="order-details" key={_id}>
                    <p className="order-confirmed">Order Confirmed</p>
                    <p>{new Date(createdAt).toDateString()}</p>
                    <p>
                      <span className="text-bold-weight">Payment Id: </span>
                      {paymentId}
                    </p>
                    <p className="text-bold-weight">Delivered to:</p>
                    <p>{deliveryAddress.name}</p>
                    <p>{deliveryAddress.street}</p>
                    <p>{deliveryAddress.city}</p>
                    <p>{deliveryAddress.state}</p>
                    <p>Mobile: {deliveryAddress.mobile}</p>
                    <p>
                      <span className="text-bold-weight">
                        Total Price: {amountPaid}
                      </span>
                    </p>
                  </div>

                  <div className="order-items" key={_id}>
                    {orderedProducts.map(
                      ({ _id, title, qty, img, price, discount }) => (
                        <Link to={`/products/${_id}`} key={_id}>
                          <div className="order-card">
                            <div className="order-image">
                              <img src={img} alt={title} />
                            </div>
                            <div className="order-content">
                              <p className="text-bold-weight">{title}</p>
                              <p>
                                ₹
                                {Number(price) -
                                  (Number(price) * Number(discount)) / 100}
                              </p>
                              <p>Quantity : {qty}</p>
                            </div>
                          </div>
                        </Link>
                      )
                    )}
                  </div>
                </>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};
