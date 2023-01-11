import Head from "next/head";
import styles from '../styles/Home.module.css'

export default function Headline(props) {
    return (
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">{props.page}.js!</a>
        </h1>
        
    )
}