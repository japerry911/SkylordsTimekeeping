const INITIAL_STATE = { user: {}, loading: false, authed: false, error: null };

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOADING_START":
      return { ...state, loading: true, error: null };

    case "FAILED":
      return { ...state, loading: false, error: action.error };

    case "SUCCESS":
      return { ...state, loading: false, user: action.payload, authed: true };

    case "CREATE_SUCCESS": {
      return { ...state, loading: false };
    }

    case "SIGN_OUT":
      return { ...state, user: {}, authed: false };

    default:
      return state;
  }
};

export default usersReducer;
