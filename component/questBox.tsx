import Main from "next/document";
import Head from "next/head";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useCounter } from "../hooks/usdCounter";
import styles from "../styles/Home.module.css";
import Headline from "./headline";
import Links from "./links";
import QuestTypeA from "./questTypeA";

export default function QuestBox() {
  // const {count, clickHandler} = useCounter()
  const [text, setText] = useState("");
  const [boardArray, setBoardArray] = useState([]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const boardAddHandler = useCallback(
    (e: React.MouseEvent) => {
      setBoardArray((prevBoardArray) => {
        const newBoardArray = [...prevBoardArray, text];

        return newBoardArray;
      });
    },
    [text]
  );

  return (
    <div className={styles.center}>
      <div className={styles.center}>
        <QuestTypeA title="當然" />
        <br />
        <QuestTypeA title="當然不" />
      </div>
      <br />
      <div className={styles.grid}>
        <input type="input" value={text} onChange={changeHandler}></input>
        <button onClick={boardAddHandler}>留言</button>
        <ul>
          {boardArray.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
