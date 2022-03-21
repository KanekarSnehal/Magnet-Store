import { createContext, useContext, useReducer } from "react";
import { AuthReducer } from "../reducer/index";
import { authInitialState } from "../utilities/index";

const AuthContext = createContext();

const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, authInitialState);
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: authState.isAuthenticated,
        user: authState.user,
        authDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, useAuthContext };
