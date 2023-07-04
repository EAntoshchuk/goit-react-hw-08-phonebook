const isLoggedInSelector = state => state.auth.isLoggedIn;
const userNameSelector = state => state.auth.user.name;

const authSelectors = {
  isLoggedInSelector,
  userNameSelector,
};

export default authSelectors;
