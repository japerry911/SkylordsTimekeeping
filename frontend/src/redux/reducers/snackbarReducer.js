const INITIAL_STATE = { open: false, type: null, message: null };

const snackbarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "HANDLE_OPEN":
      return { open: true, ...action.payload };

    case "HANDLE_CLOSE":
      return { ...state, open: false };

    default:
      return state;
  }
};

export default snackbarReducer;
