import React from "react";
import { useState } from "react";
import { Header } from "../../components/index";
import "./auth.css";
import { authActionsConstants } from "../../reducer/index";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/index";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const { authDispatch } = useAuthContext();
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
      authDispatch({
        type: authActionsConstants.GET_USER_DETAILS,
        payload: data.createdUser,
      });
      navigate("/login");
    } catch {
      authDispatch({
        type: authActionsConstants.USER_SIGNUP_FAILURE,
        payload: `Couldn't Signup, Please try again ${error.message}`,
      });
    }
  };

  return (
    <div>
      <Header />
      <main class="main-container">
        <div class="form-container">
          <h4 class="secondary-text-color  text-center">SIGN UP</h4>
          <div class="title-underline"></div>

          <form class="form-col">
            <div class="row">
              <div class="column-30-pc">
                <label
                  for="first-name"
                  class="form-label text-bold-weight form-label-required-field"
                >
                  First Name
                </label>
              </div>
              <div class="column-70-pc">
                <input
                  class="form-field"
                  type="text"
                  placeholder="Enter your first name"
                  name="firstName"
                  onChange={onChangeHandler}
                  required
                />
              </div>
            </div>

            <div class="row">
              <div class="column-30-pc">
                <label
                  for="first-name"
                  class="form-label text-bold-weight form-label-required-field"
                >
                  Last Name
                </label>
              </div>
              <div class="column-70-pc">
                <input
                  class="form-field"
                  type="text"
                  placeholder="Enter your last name"
                  name="lastName"
                  onChange={onChangeHandler}
                  required
                />
              </div>
            </div>

            <div class="row">
              <div class="column-30-pc">
                <label
                  for="first-name"
                  class="form-label text-bold-weight form-label-required-field"
                >
                  Email
                </label>
              </div>
              <div class="column-70-pc">
                <input
                  class="form-field"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  onChange={onChangeHandler}
                  required
                />
              </div>
            </div>

            <div class="row">
              <div class="column-30-pc">
                <label
                  for="first-name"
                  class="form-label text-bold-weight form-label-required-field"
                >
                  Password
                </label>
              </div>
              <div class="column-70-pc">
                <input
                  class="form-field"
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  onChange={onChangeHandler}
                  required
                />
              </div>
            </div>

            <div class="row">
              <div class="column-30-pc">
                <label
                  for="first-name"
                  class="form-label text-bold-weight form-label-required-field"
                >
                  Confirm Password
                </label>
              </div>
              <div class="column-70-pc">
                <input
                  class="form-field"
                  type="password"
                  placeholder="Re-type password"
                  name="confirmPassword"
                  onChange={onChangeHandler}
                  required
                />
              </div>
            </div>

            <button
              class="btn primary-btn text-center"
              type="submit"
              onClick={postSignupData}
            >
              REGISTER
            </button>

            <div class="py-16">
              Already registered?
              <Link to="/login" class="link-btn">
                Login here
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
