import React from "react";
import { useState } from "react";
import { Header } from "../../components/index";
import "./auth.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../context/index";
import axios from "axios";
import toast from "react-hot-toast";

export function Login() {
  const { authState, setAuthState } = useAuthContext();
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const location = useLocation();
  const onChangeHandler = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const postLoginData = async (e) => {
    e.preventDefault();
    try {
      setAuthState({
        ...authState,
        loading: true,
      });
      const { data } = await axios.post(`/api/auth/login`, {
        email: userInfo.email,
        password: userInfo.password,
      });
      localStorage.setItem("magnetStoreToken", data.encodedToken);
      localStorage.setItem("magnetStoreUser", data.foundUser);
      setAuthState({
        ...authState,
        authToken: data.encodedToken,
        authUser: data.foundUser,
        loading: false,
      });
      navigate("/");
      toast.success(`Welcome back, ${data.foundUser.firstName}`);
    } catch (e) {
      toast.error(e?.response?.data?.message);
    }
  };
  const handleTestLogin = async (e) => {
    e.preventDefault();
    try {
      setAuthState({
        ...authState,
        loading: false,
      });
      const { data } = await axios.post(`/api/auth/login`, {
        email: "karenbrewer12@gmail.com",
        password: "karen@123",
      });
      localStorage.setItem("magnetStoreToken", data.encodedToken);
      localStorage.setItem("magnetStoreUser", JSON.stringify(data.foundUser));
      setAuthState({
        ...authState,
        authToken: data.encodedToken,
        authUser: data.foundUser,
        loading: false,
      });
      navigate("/");
      toast.success(`Welcome back, ${data.foundUser.firstName}`);
    } catch (error) {
      toast.error(e?.response?.data?.message);
    }
  };
  return (
    <div>
      <Header />
      <main className="main-container">
        <div className="form-container">
          <h4 className="secondary-text-color  text-center">LOG IN</h4>
          <div className="title-underline"></div>

          <form className="form-col">
            <div className="row">
              <input
                className="form-field"
                type="email"
                placeholder="Enter your email here"
                name="email"
                onChange={onChangeHandler}
                required
              />
            </div>

            <div className="row">
              <input
                className="form-field"
                type="password"
                placeholder="Enter your password"
                name="password"
                onChange={onChangeHandler}
                required
              />
            </div>
            <button
              className="btn outline-primary-btn text-center"
              type="submit"
              onClick={handleTestLogin}
            >
              LOGIN WITH TEST CREDENTIALS
            </button>
            <button
              className="btn primary-btn text-center"
              type="submit"
              onClick={postLoginData}
            >
              LOGIN
            </button>

            <div className="py-16">
              Not a user yet?
              <Link to="/signup" className="link-btn">
                Create your account
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
