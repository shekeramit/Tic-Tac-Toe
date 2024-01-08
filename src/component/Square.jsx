import React from "react";

function Square({ value, SelectBox }) {
  return (
    <div
      onClick={SelectBox}
      className="h-[70px] w-[70px] grid place-content-center cursor-pointer border hover:bg-gray-100"
    >
      <h1
        className={`text-4xl ${
          value === "X" ? "text-pink-300" : "text-blue-300"
        }`}
      >
        {value}
      </h1>
    </div>
  );
}

export default Square;
