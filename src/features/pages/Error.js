import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center h-screen text-gray-200">
      <div className="flex gap-2">
        {" "}
        <h2 className="font-bold">404</h2>
        <span>|</span>
        <p className="font-light">This page could not be found.</p>
      </div>
      <div className="text-ssm text-gray-500">
        <Link to="/" className="text-purple-500">
          Go to home
        </Link>
      </div>
    </div>
  );
};

export default Error;
