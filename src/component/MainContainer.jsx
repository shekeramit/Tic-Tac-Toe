import React, { useState, useEffect } from "react";
import Decision from "./Decision";
import RightContent from "./RightContent";
import Square from "./Square";
import { WinnerPattern } from "./WinnerPattern";

const initialValue = [null, null, null, null, null, null, null, null, null];

const MainContainer = () => {
  const [GameState, setGameState] = useState(initialValue);
  const [xturnplayer, setXTurnPlayer] = useState(true);
  const [WinnerTrue, setWinnerTrue] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [counter, setCounter] = useState(1);

  const SelectBox = (index) => {
    let copyState = [...GameState];
    if (copyState[index] === null) {
      setXTurnPlayer(!xturnplayer);
      setGameState(copyState);
      copyState[index] = xturnplayer ? "X" : "O";
      setCounter(counter + 1);
    }
  };

  const Reset = () => {
    setXTurnPlayer(true);
    setGameState(initialValue);
    setWinnerTrue(false);
    setCounter(1);
  };

  const Winner = () => {
    WinnerPattern.map((pattern) => {
      const [a, b, c] = pattern;
      if (
        GameState[a] !== null &&
        GameState[a] === GameState[b] &&
        GameState[a] === GameState[c]
      ) {
        setWinnerTrue(true);
        setPlayerName(GameState[a]);
      }
    });

    return false;
  };

  useEffect(() => {
    {
      counter === 10 && setWinnerTrue(true);
    }
    Winner();
  }, [GameState]);

  return (
    <>
      <div className="sm:grid grid-cols-2 h-full max-w-5xl mx-auto pb-10">
        <div className="grid place-items-center h-1/2 sm:h-full">
          <RightContent Reset={Reset} />
        </div>

        <div className=" grid place-content-center h-1/2 sm:h-full ">
          <div className="flex py-2">
            <h1
              className={` ${
                counter % 2 === 1 && "border-pink-300"
              } border-b-4 pb-2 text-2xl p-1 cursor-pointer select-none mr-1 `}
            >
              Player X
            </h1>
            <h1
              className={`${
                counter % 2 === 0 && "border-blue-300"
              } border-b-4  pb-2 text-2xl  p-1 cursor-pointer select-none `}
            >
              Player O
            </h1>
          </div>

          {!WinnerTrue ? (
            <div className=" mx-auto w-min shadow-md select-none">
              <div className="row1 flex">
                <Square
                  value={GameState[0]}
                  SelectBox={() => SelectBox(0)}
                  counter={xturnplayer}
                />
                <Square value={GameState[1]} SelectBox={() => SelectBox(1)} />
                <Square value={GameState[2]} SelectBox={() => SelectBox(2)} />
              </div>
              <div className="row2 flex">
                <Square value={GameState[3]} SelectBox={() => SelectBox(3)} />
                <Square value={GameState[4]} SelectBox={() => SelectBox(4)} />
                <Square value={GameState[5]} SelectBox={() => SelectBox(5)} />
              </div>
              <div className="row3 flex">
                <Square value={GameState[6]} SelectBox={() => SelectBox(6)} />
                <Square value={GameState[7]} SelectBox={() => SelectBox(7)} />
                <Square value={GameState[8]} SelectBox={() => SelectBox(8)} />
              </div>
            </div>
          ) : (
            <Decision WinPlayer={playerName} Counter={counter} Reset={Reset} />
          )}
        </div>
      </div>
    </>
  );
};

export default MainContainer;
