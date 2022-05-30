import React, { useEffect } from "react";
import "./profile-details.css";
import { useAuthContext } from "../../context";
import { useNavigate } from "react-router-dom";

export const ProfileDetails = () => {
  const {
    authState: { authUser },
    setAuthState,
  } = useAuthContext();

  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("magnetStoreToken");
    localStorage.removeItem("magnetStoreUser");
    setAuthState({ ...authState, authToken: null, authUser: null });
    navigate("/");
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
