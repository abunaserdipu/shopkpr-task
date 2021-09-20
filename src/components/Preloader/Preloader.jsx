import React from "react";
import HashLoader from "react-spinners/HashLoader";

function Preloader() {
  return (
    <>
      <div className="text-center align-items-center bg-white d-flex justify-content-center vw-100 vh-100">
        <HashLoader color={"#198754"} size={100} />
      </div>
    </>
  );
}

export default Preloader;
