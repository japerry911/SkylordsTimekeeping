import React from "react";
import MoonLoader from "react-spinners/MoonLoader";

const Spinner = () => (
  <div
    style={{
      width: "100%",
      height: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <MoonLoader />
  </div>
);

export default Spinner;
