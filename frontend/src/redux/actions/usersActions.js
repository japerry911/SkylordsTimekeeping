import goServer from "../../api/goServer";

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
        console.log(response);
        return true;
      },
      (error) => {
        dispatch(failed(error));
        return false;
      }
    );
  };
};
