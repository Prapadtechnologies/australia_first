import React from "react";

const NoData = (props) => {
  return (
    <div className="w-full bg-danger p-4 my-10 rounded-lg shadow-lg flex justify-center items-center">
      <p className="font-pop text-sm text-white ">{props.description}</p>
    </div>
  );
};

export default NoData;
