import React, { useEffect } from "react";
import "./profile-details.css";
import { useAuthContext } from "../../context";
import { useNavigate } from "react-router-dom";

export const ProfileDetails = () => {
  const { authState, setAuthState } = useAuthContext();
  useEffect(() => {
    localStorage.magnetStoreToken ??
      setAuthState({
        ...authState,
        authUser: localStorage.getItem("magnetStoreUser"),
      });
  }, []);
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
        <span>Aadarsh Balika</span>
      </p>
      <p className="profile-info">
        <span>Email</span>
        <span>aadarshbalika@gmail.com</span>
      </p>
      <button className="btn outline-secondary-btn" onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
};
