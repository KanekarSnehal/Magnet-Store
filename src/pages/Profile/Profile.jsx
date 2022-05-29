import React from "react";
import { Header } from "../../components";
import "./profile.css";
import { MdLocationOn } from "react-icons/md";
import { FaBoxOpen, FaUserCog } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";

export const Profile = () => {
  const tabOptions = [
    {
      text: "Profile",
      link: "/profile",
      icon: <FaUserCog />,
    },
    {
      text: "Addresses",
      link: "/profile/address",
      icon: <MdLocationOn />,
    },
    {
      text: "Orders",
      link: "/profile/orders",
      icon: <FaBoxOpen />,
    },
  ];
  return (
    <>
      <Header />
      <div className="profile-container">
        <div className="tabs-container">
          {tabOptions.map(({ text, link, icon }) => (
            <NavLink
              to={link}
              className={({ isActive }) => (isActive ? "active-tabs" : "false")}
              end
              key={text}
            >
              <div className="tab-items">
                <p className="profile-icons">{icon}</p>
                <p className="profile-text">{text}</p>
              </div>
            </NavLink>
          ))}
        </div>
        <Outlet />
      </div>
    </>
  );
};
