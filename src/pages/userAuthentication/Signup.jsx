import React from "react";
import { useState } from "react";
import { Header } from "../../components/index";
import "./auth.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/index";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function Signup() {
  const { authState, setAuthState } = useAuthContext();
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const { firstName, lastName, email, password, confirmPassword } = userInfo;

  const postSignupData = async () => {
    try {
      const { data } = await axios.post(`/api/auth/signup`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });

      localStorage.setItem("token", data.encodedToken);
      setAuthState({
        ...authState,
        authToken: data.encodedToken,
        authUser: data.foundUser,
        loading: false,
      });
      navigate("/login");
      toast.success(`Welcome, ${data.foundUser.firstName}`);
    } catch (e) {
      toast.error(e?.response?.data?.message);
    }
  };

  return (
    <div>
      <Header />
      <main className="main-container">
        <div className="form-container">
          <h4 className="secondary-text-color  text-center">SIGN UP</h4>
          <div className="title-underline"></div>

          <form className="form-col">
            <div className="row">
              <div className="column-30-pc">
                <label
                  for="first-name"
                  className="form-label text-bold-weight form-label-required-field"
                >
                  First Name
                </label>
              </div>
              <div className="column-70-pc">
                <input
                  className="form-field"
                  type="text"
                  placeholder="Enter your first name"
                  name="firstName"
                  onChange={onChangeHandler}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="column-30-pc">
                <label
                  for="first-name"
                  className="form-label text-bold-weight form-label-required-field"
                >
                  Last Name
                </label>
              </div>
              <div className="column-70-pc">
                <input
                  className="form-field"
                  type="text"
                  placeholder="Enter your last name"
                  name="lastName"
                  onChange={onChangeHandler}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="column-30-pc">
                <label
                  for="first-name"
                  className="form-label text-bold-weight form-label-required-field"
                >
                  Email
                </label>
              </div>
              <div className="column-70-pc">
                <input
                  className="form-field"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  onChange={onChangeHandler}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="column-30-pc">
                <label
                  for="first-name"
                  className="form-label text-bold-weight form-label-required-field"
                >
                  Password
                </label>
              </div>
              <div className="column-70-pc">
                <input
                  className="form-field"
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  onChange={onChangeHandler}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="column-30-pc">
                <label
                  for="first-name"
                  className="form-label text-bold-weight form-label-required-field"
                >
                  Confirm Password
                </label>
              </div>
              <div className="column-70-pc">
                <input
                  className="form-field"
                  type="password"
                  placeholder="Re-type password"
                  name="confirmPassword"
                  onChange={onChangeHandler}
                  required
                />
              </div>
            </div>

            <button
              className="btn primary-btn text-center"
              type="submit"
              onClick={postSignupData}
            >
              REGISTER
            </button>

            <div className="py-16">
              Already registered?
              <Link to="/login" className="link-btn">
                Login here
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
