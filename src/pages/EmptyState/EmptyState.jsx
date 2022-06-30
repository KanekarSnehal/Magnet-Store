import React from "react";
import { Header } from "../../components";
import errorImage from "../../assets/404-image.jpg";

export const EmptyState = () => {
  return (
    <div>
      <Header />
      <div className="empty-state">
        <img src={errorImage} alt="404 image" className="img-404" />
        <h1 className="text-center">
          The page you are looking for does not exist!
        </h1>
      </div>
    </div>
  );
};
