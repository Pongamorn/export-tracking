import React, { useState } from "react";
import Load1 from "../../assets/loading1.svg";

// eslint-disable-next-line react/prop-types
const Loading = ({ children }) => {
  const [load, setLoad] = useState(true);
  return (
    <div className=" relative">
      <div className=" flex w-screen h-screen justify-center bg-white opacity-80 absolute top-0 left-0">
        {load ? <img className=" w-52 h-auto" src={Load1} /> : children}
      </div>
    </div>
  );
};

export default Loading;
