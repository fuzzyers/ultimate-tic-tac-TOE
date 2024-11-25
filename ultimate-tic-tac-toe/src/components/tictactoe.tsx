"use client"
import React, { useState } from 'react'
import styles from "@/styles/tictactoe.module.css"
import { place } from '@/utils/tictactoe';

const Tictactoe = () => {
  const [turn, setTurn] = useState("p1")
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ])

  return (
    <>
      <h1>Turn: {turn}</h1>
      <table className={styles.grid}>
        <tbody className={styles.gridBody}>
          {board.map((row, rowIndex) => (
            <tr key={rowIndex} className={styles.row}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className={styles.cell} onClick={() => place(setBoard, turn, setTurn, rowIndex, cellIndex, board)}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setBoard([
          ["", "", ""],
          ["", "", ""],
          ["", "", ""]
      ])}>clear</button>
    </>
  );
};

export default Tictactoe