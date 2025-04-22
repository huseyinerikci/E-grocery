import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="grid place-items-center h-[80vh]">
      <FaSpinner className="animate-spin text-4xl text-green-500" />
    </div>
  );
};

export default Loading;
