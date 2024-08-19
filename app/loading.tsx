import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-10 h-10 ease-linear border-t-2 border-b-2 border-purple-900 rounded-full animate-spin"></div>
      <div className="w-10 h-10 ml-3 ease-linear border-t-2 border-b-2 border-red-900 rounded-full animate-spin"></div>
      <div className="w-10 h-10 ml-3 ease-linear border-t-2 border-b-2 border-blue-900 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;