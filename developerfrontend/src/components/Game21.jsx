"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/Play.module.css"; // Import the CSS Module

const Bagram21Game = () => {
  const [currentNumber, setCurrentNumber] = useState(1);
  const [playerTurn, setPlayerTurn] = useState(true); // True for player, false for computer
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("Game started! Player starts.");
  const choices = [1, 2, 3];

  // Handle player move
  const handlePlayerMove = (numbers) => {
    if (gameOver || !playerTurn) return;

    // Add the numbers chosen by the player to the current number
    const newNumber = currentNumber + numbers;
    if (newNumber >= 21) {
      setMessage("You reached 21! You lose!");
      setGameOver(true);
    } else {
      setCurrentNumber(newNumber);
      setPlayerTurn(false); // Switch to computer's turn
    }
  };

  // Handle computer move with a delay
  const handleComputerMove = () => {
    if (gameOver || playerTurn) return;

    // Add a slight delay for the computer's turn
    setTimeout(() => {
      const computerChoice = Math.floor(Math.random() * 3) + 1;
      const newNumber = currentNumber + computerChoice;

      if (newNumber >= 21) {
        setMessage("Computer reached 21! You win!");
        setGameOver(true);
      } else {
        setCurrentNumber(newNumber);
        setPlayerTurn(true); // Switch back to player's turn
      }
    }, 500); // 0.5 seconds delay
  };

  // Reset the game
  const handleReset = () => {
    setCurrentNumber(1);
    setPlayerTurn(true);
    setGameOver(false);
    setMessage("Game started! Player starts.");
  };

  // Call computer move if it's its turn
  useEffect(() => {
    if (!playerTurn && !gameOver) {
      handleComputerMove();
    }
    if (!playerTurn && !gameOver) {
      setMessage("Computer Turn");
    }
    if (playerTurn && !gameOver) {
      setMessage("Your Turn");
    }
  }, [playerTurn, currentNumber, gameOver]);

  return (
    <div className={styles.gameContainer}>

      <div className={styles.scoreBoard}>
        <p>Current number: {currentNumber}</p>
      </div>
      <div className={styles.message}>{message}</div>

      <div className={styles.buttons}>
      
          <>
            <button
              className={styles.button}
              onClick={() => handlePlayerMove(1)}
              disabled={gameOver || !choices.includes(1)}
            >
              Add 1
            </button>
            <button
              className={styles.button}
              onClick={() => handlePlayerMove(2)}
              disabled={gameOver || !choices.includes(2)}
            >
              Add 2
            </button>
            <button
              className={styles.button}
              onClick={() => handlePlayerMove(3)}
              disabled={gameOver || !choices.includes(3)}
            >
              Add 3
            </button>
          </>
      
      </div>

      <button className={styles.button} onClick={handleReset} disabled={!gameOver}>
        Reset Game
      </button>
    </div>
  );
};

export default Bagram21Game;
