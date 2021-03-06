import goServer from "../../api/goServer";
const _ = require("lodash");

export const loadingStart = () => {
  return {
    type: "LOADING_START",
  };
};

export const success = (payload) => {
  return {
    type: "SUCCESS",
    payload,
  };
};

export const failed = (error) => {
  return {
    type: "FAILED",
    error,
  };
};

export const signIn = (username, password) => {
  return (dispatch) => {
    dispatch(loadingStart());

    const formData = new FormData();

    formData.set("UserName", username);
    formData.set("Password", password);

    return goServer.post("/api/users/authentication", formData).then(
      (response) => {
        dispatch(success(_.pick(response.data, "ID", "UserName", "Email")));
        return _.pick(response.data, "ID");
      },
      (error) => {
        dispatch(failed(error));
        return false;
      }
    );
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const createSuccess = () => {
  return {
    type: "CREATE_SUCCESS",
  };
};

export const createUser = (username, email, password) => {
  return (dispatch) => {
    dispatch(loadingStart());

    const formData = new FormData();

    formData.set("UserName", username);
    formData.set("Email", email);
    formData.set("Password", password);

    return goServer.post("/api/users", formData).then(
      (response) => {
        dispatch(createSuccess());
        return true;
      },
      (error) => {
        dispatch(failed(error));
        return false;
      }
    );
  };
};
