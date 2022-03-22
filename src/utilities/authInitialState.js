const authInitialState = {
  user: [],
  isAuthenticated: localStorage.getItem("token") ? true : false,
  error: null,
};
export { authInitialState };
