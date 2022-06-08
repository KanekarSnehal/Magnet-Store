import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useDocumentTitle = () => {
  const { pathname } = useLocation();

  const validRoutes = [
    "products",
    "login",
    "signup",
    "cart",
    "wishlist",
    "checkout",
    "profile",
  ];
  const titleName = pathname.split("/")[1];

  useEffect(() => {
    let pathName = "";
    if (titleName === "") {
      pathName = `HOME | MAGNET STORE`;
    } else if (validRoutes.includes(titleName))
      pathName = `${titleName.toUpperCase()} | MAGNET STORE`;
    else pathName = `NOT FOUND`;

    document.title = pathName;
  }, [pathname]);
};
