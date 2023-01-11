import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'
import Headline from './headline'
import Links from './links'


export default function Main(props) {
    return (
        <main className={styles.main}>
        <Headline page={props.page}/>
        

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/{props.page}.js</code>
        </p>

        <Links />
        
      </main>
    )
}