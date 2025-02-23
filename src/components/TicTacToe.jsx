"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/Play.module.css";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (board) => {
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    if (board.every((cell) => cell !== null)) {
      return "Tie";
    }
    return null;
  };

  const handlePlayerMove = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);

    const result = checkWinner(newBoard);
    if (result) {
      setWinner(result);
    } else {
      setPlayer("O");
    }
  };

  const handleComputerMove = () => {
    const randomChance = Math.random() < 0.2; // 20% chance for a suboptimal move
    let move;

    if (randomChance) {
      // Suboptimal move: Choose a random available spot
      const availableMoves = board
        .map((cell, index) => (cell === null ? index : null))
        .filter((index) => index !== null);
      move = availableMoves[Math.floor(Math.random() * availableMoves.length)];
    } else {
      // Optimal move: Use the best move strategy
      move = findBestMove(board);
    }

    const newBoard = [...board];
    newBoard[move] = "O";
    setBoard(newBoard);

    const result = checkWinner(newBoard);
    if (result) {
      setWinner(result);
    } else {
      setPlayer("X");
    }
  };

  const findBestMove = (board) => {
    // Prioritize winning or blocking the opponent
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] === "O" && board[b] === "O" && board[c] === null) return c;
      if (board[a] === "O" && board[c] === "O" && board[b] === null) return b;
      if (board[b] === "O" && board[c] === "O" && board[a] === null) return a;
    }

    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] === "X" && board[b] === "X" && board[c] === null) return c;
      if (board[a] === "X" && board[c] === "X" && board[b] === null) return b;
      if (board[b] === "X" && board[c] === "X" && board[a] === null) return a;
    }

    // Pick the center if available
    if (board[4] === null) return 4;

    // Pick a random available move as fallback
    const availableMoves = board
      .map((cell, index) => (cell === null ? index : null))
      .filter((index) => index !== null);
    return availableMoves[0];
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setPlayer("X");
    setWinner(null);
  };

  useEffect(() => {
    if (player === "O" && !winner) {
      const timer = setTimeout(handleComputerMove, 500);
      return () => clearTimeout(timer);
    }
  }, [player, winner]);

  return (
    <div className={styles.gameContainer}>
      <div className={styles.board}>
        {board.map((cell, index) => (
          <div
            key={index}
            className={`${styles.cell} ${cell ? styles.disabled : ""}`}
            onClick={() => handlePlayerMove(index)}
          >
            {cell}
          </div>
        ))}
      </div>
      {winner && (
        <div className={styles.winner}>
          {winner === "Tie" ? "It's a tie!" : `${winner} wins!`}
        </div>
      )}
      <button className={styles.resetButton} onClick={handleReset}>
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
