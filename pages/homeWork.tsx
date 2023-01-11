import styles from "../styles/Home.module.css";
import React, { Component } from "react";
import QuestBox from "../component/questBox";

export default function HomeWork() {
  return (
    <div className={styles.container}>
      <div className={styles.border}>
        <div className={styles.center}>
          <h1>咖哩飯拌是不伴</h1>
        </div>
        <div className={styles.center}>
          <QuestBox></QuestBox>
        </div>
      </div>
    </div>
  );
}
