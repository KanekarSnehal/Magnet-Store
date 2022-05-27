import { createContext, useContext, useReducer, useEffect } from "react";
import { userDataInitialState } from "../utilities";
import { UserDataReducer } from "../reducer";

const UserDataContext = createContext();
const useUserData = () => useContext(UserDataContext);

const UserDataProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(
    UserDataReducer,
    userDataInitialState
  );

  return (
    <UserDataContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserDataContext.Provider>
  );
};

export { useUserData, UserDataProvider };
