import { createContext, useContext, useReducer, useState } from "react";
import { userDataInitialState } from "../utilities";
import { UserDataReducer } from "../reducer";

const UserDataContext = createContext();
const useUserData = () => useContext(UserDataContext);

const UserDataProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(
    UserDataReducer,
    userDataInitialState
  );
  const [orderAddress, setOrderAddress] = useState(null);

  return (
    <UserDataContext.Provider
      value={{ userState, userDispatch, orderAddress, setOrderAddress }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export { useUserData, UserDataProvider };
