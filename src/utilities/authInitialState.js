const authInitialState = {
  user: [],
  isAuthenticated: localStorage.getItem("token") ? true : false,
};
export { authInitialState };
