import React, { useEffect } from "react";
import "./profile-details.css";
import { useAuthContext } from "../../context";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const ProfileDetails = () => {
  const { authState, setAuthState } = useAuthContext();
  const { authUser } = authState;
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("magnetStoreToken");
    localStorage.removeItem("magnetStoreUser");
    setAuthState({ ...authState, authToken: null, authUser: null });
    navigate("/");
    toast.success(`Logged Out Successfully`);
  };

  return (
    <div className="profile-details-container">
      <p className="profile-info">
        <span>Name</span>
        <span>
          {authUser.firstName} {authUser.lastName}
        </span>
      </p>
      <p className="profile-info">
        <span>Email</span>
        <span>{authUser.email}</span>
      </p>
      <button className="btn outline-secondary-btn" onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
};
