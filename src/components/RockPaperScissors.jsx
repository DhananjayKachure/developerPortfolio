"use client";
import React, { useState } from "react";
import { paperSvg, scissorSvg, rockSvg } from "./Icons";

const options = ["Rock", "Paper", "Scissors"];

const RockPaperScissors = () => {
  const [playerSelection, setPlayerSelection] = useState(null);
  const [computerSelection, setComputerSelection] = useState(null);
  const [result, setResult] = useState("");

  const handlePlayerSelection = (option) => {
    const computerChoice = getComputerChoice();
    setPlayerSelection(option);
    setComputerSelection(computerChoice);
    setResult(getGameResult(option, computerChoice));
  };

  const getComputerChoice = () => {
    return options[Math.floor(Math.random() * options.length)];
  };

  const getGameResult = (player, computer) => {
    if (player === computer) return "It’s a tie!";
    if (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Paper" && computer === "Rock") ||
      (player === "Scissors" && computer === "Paper")
    ) {
      return "You win!";
    }
    return "You lose!";
  };

  const getIcon = (choice) => {
    switch (choice) {
      case "Rock":
        return rockSvg();
      case "Paper":
        return paperSvg();
      case "Scissors":
        return scissorSvg();
      default:
        return null;
    }
  };

  return (
    <div className="rock-paper-scissors" style={styles.container}>
      <div className="options" style={styles.options}>
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handlePlayerSelection(option)}
            style={styles.button}
            aria-label={`Choose ${option}`}
          >
            {getIcon(option)}
          </button>
        ))}
      </div>
      {result && <p style={styles.result}>{result}</p>}
      <div style={styles.choices}>
        {playerSelection && (
          <div style={styles.choice}>
            <p>You chose:</p>
            {getIcon(playerSelection)}
          </div>
        )}
        {computerSelection && (
          <div style={styles.choice}>
            <p>Computer chose:</p>
            {getIcon(computerSelection)}
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
  },
  title: {
    fontSize: "2em",
    marginBottom: "20px",
  },
  options: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1.2em",
    cursor: "pointer",
    border: "2px solid #ffff",
    borderRadius: "8px",
    backgroundColor: "transparent",
    transition: "transform 0.2s",
  },
  buttonHover: {
    transform: "scale(1.1)",
  },
  result: {
    fontSize: "1.5em",
    marginTop: "20px",
    fontWeight: "bold",
  },
  choices: {
    display: "flex",
    gap: "40px",
    marginTop: "20px",
  },
  choice: {
    textAlign: "center",
  },
};

export default RockPaperScissors;
