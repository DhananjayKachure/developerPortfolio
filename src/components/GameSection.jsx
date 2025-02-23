"use client";
import React, { useState } from "react";
import PlayCss from "@/styles/Play.module.css"; // Import CSS module
import TicTacToe from "./TicTacToe";
import RockPaperScissors from "./RockPaperScissors";
import Game21 from "./Game21";

const GameSection = () => {
  const playArray = [
    {
      id: 1,
      name: "Tic Tac Toe",
      description:
        "The timeless showdown of X vs. O! Outsmart your opponent in a 3x3 grid of glory. Warning: May cause overthinking.",
      comp: <TicTacToe />,
    },
    {
      id: 2,
      name: "Rock Paper Scissors",
      description:
        "The ultimate hand battle! Rock smashes scissors, paper beats rock, and scissors cut paper. Who will reign supreme? (Hint: Not you, if the computer is in the zone!)",
      comp: <RockPaperScissors />,
    },
    {
      id: 3,
      name: "Bagram (Game 21)",
      description:
        "Count carefully, or suffer the wrath of 21! A thrilling game of numbers where your brain battles the computer's logic. Avoid the cursed 21 at all costs!",
      comp: <Game21 />,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const handleOpen = (game) => {
    setSelectedGame(game);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedGame(null);
  };

  return (
    <>
      <div className={PlayCss.openSourceSection}>
        <h2 className={PlayCss.sectionTitle}>Play Games</h2>
        <div className={PlayCss.projectsContainer}>
          {playArray.map((game) => (
            <div key={game.id} className={PlayCss.projectItem}>
              <h3>{game.name}</h3>
              <p>{game.description}</p>
              <div onClick={() => handleOpen(game)} className={PlayCss.projectLink}>
                Play
              </div>
            </div>
          ))}
        </div>
        {isOpen && (
          <div className={PlayCss.modalContainer}>
            <div className={PlayCss.modalContent}>
              <button onClick={handleClose} className={PlayCss.closeModal}>
                X
              </button>
              <h2>{selectedGame?.name}</h2>
              {selectedGame?.comp}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GameSection;
