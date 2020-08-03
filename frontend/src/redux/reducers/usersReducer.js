const INITIAL_STATE = { user: {}, loading: false, authed: false, error: null };

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOADING_START":
      return { ...state, loading: true, error: null };

    case "FAILED":
      return { ...state, loading: false, error: action.error };

    case "SUCCESS":
      return { ...state, loading: false, user: action.payload };

    default:
      return state;
  }
};

export default usersReducer;