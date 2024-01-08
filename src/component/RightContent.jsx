import React from "react";

const RightContent = ({ Reset }) => {
  return (
    <div className=" py-3 px-2">
      <h1 className="text-6xl text-pink-300">Hii</h1>
      <h1 className="text-3xl capitalize pb-2">welcome to my game..</h1>
      <p className="text-xl capitalize pb-2">Press here to start new game</p>
      <button
        className="rounded-full border bg-pink-200 py-1  px-6 text-center text-2xl text-white hover:bg-transparent hover:text-pink-300 pb-3 transition-all"
        onClick={() => Reset()}
      >
        Start
      </button>
    </div>
  );
};

export default RightContent;
