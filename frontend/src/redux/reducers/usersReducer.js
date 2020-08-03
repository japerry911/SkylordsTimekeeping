const INITIAL_STATE = { user: {}, loading: false, authed: false, error: null };

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default usersReducer;
