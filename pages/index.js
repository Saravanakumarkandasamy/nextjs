import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css' 

export default function Home() {
  return (
    <>
      <head>
        <title>NEXT | HOME</title>
        <meta name="keywords" content="Sara learning Nextjs"/>
        <meta name="description" content="Free Web tutorials"/>
      </head> 
      <div> 
        <h1 className={styles.title}>Home</h1>
        <h2 className={styles.text}> Industry relevant advanced courses for Engineers.  </h2>
        <p className={styles.text}>This year make your dream job in a core company a reality </p>
        <Link href="/test">
          <a className={styles.btn}>Users Details</a>
        </Link> 
      </div>
     </> 
  )
}
