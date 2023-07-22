"use client"
import React, {useEffect} from 'react'
import Image from 'next/image'
import styles from './page.module.css'
export default function Home() {
  useEffect(() => {
    document.title = "Maybelline"
  }, [])
  
  return (
    <div>
    <main className='homeContainer'>
    <div className="homeArrow1 rotateArrow1"></div>
      <div className="homeArrow2 rotateArrow2"></div>

  <p className='homeTitle'>
    Maybelline
    </p>
    </main>
    </div>
  )
}
