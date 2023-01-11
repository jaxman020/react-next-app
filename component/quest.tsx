import { Main } from 'next/document'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'
import Headline from './headline'
import Links from './links'
import QuestTypeA from './questTypeA'


export default function Quest() {
    return (
      <main>
        <div>
          <QuestTypeA></QuestTypeA>
        </div>
      </main>
      
    )
}