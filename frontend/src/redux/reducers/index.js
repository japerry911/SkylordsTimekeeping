import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import snackbarReducer from "./snackbarReducer";

const allReducers = combineReducers({
  users: usersReducer,
  snackbar: snackbarReducer,
});

export default allReducers;
