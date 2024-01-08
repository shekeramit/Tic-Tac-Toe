import React from "react";
import winPng from "/win.svg";
import Draw from "/draw.svg";

const Decision = ({ WinPlayer, Counter, Reset }) => {
  return (
    <div className="h-auto w-60 px-2 py-1 grid place-items-center shadow-md rounded-md">
      {Counter === 10 && WinPlayer !== "" ? (
        <div className="text-center p-2">
          <img src={Draw} alt="winner png" className="h-36 w-36" />
          <h1 className="text-2xl ">Match Draw!</h1>
        </div>
      ) : (
        <div className="text-center p-2">
          <img src={winPng} alt="winner png" className="h-36 w-36" />
          <h1 className="text-2xl ">{WinPlayer} won</h1>
        </div>
      )}
      <ResetButton Reset={Reset} />
    </div>
  );
};

export const ResetButton = ({ Reset }) => {
  return (
    <button
      onClick={Reset}
      className="text-2xl text-white py-1 pb-2 rounded-md w-full bg-pink-200 border"
    >
      Reset
    </button>
  );
};

export default Decision;
