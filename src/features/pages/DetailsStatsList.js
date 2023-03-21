import React from "react";
import { BsDot } from "react-icons/bs";

const DetailsStatsList = ({ stats }) => {
  return (
    <>
      {stats.map((stat, index) => (
        <li key={index} className="grid grid-cols-5 text-gray-300">
          <div className="col-span-3 flex items-center">
            <BsDot
              className={`text-2xl -ml-3 ${
                stat.type === 1
                  ? "text-[#b0e3ff]"
                  : stat.type === 2
                  ? "text-[#c6c7f8]"
                  : "text-[#95a4fc]"
              }`}
            />{" "}
            <span className="text-ss">{stat.name}</span>
          </div>
          <div className="col-span-2">
            {stat.value} ({stat.percent})
          </div>
        </li>
      ))}
    </>
  );
};

export default DetailsStatsList;
