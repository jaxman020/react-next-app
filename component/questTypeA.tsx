import React, { useCallback, useState } from "react";
import { arrayBuffer } from "stream/consumers";
import styles from "../styles/Home.module.css";

export default function QuestTypeA({ title }: any) {
  const [count, setCount] = useState(0);
  
  const voteHandler = useCallback(
    (e: React.MouseEvent) => {
      setCount((prevCount: number) => {
        console.log(count);
        return prevCount + 1;
      });
    },
    [count]
  );

  

  return (
    <div className={styles.card}>
      <div className={styles.center}>
        <h1>{title}</h1>
      </div>
      <div className={styles.center}>
        <h2>{count}</h2>
      </div>
      <div className={styles.center}>
        <button onClick={voteHandler}>投票</button>
      </div>
      
    </div>
  );
}
