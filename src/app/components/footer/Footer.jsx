import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import lk from '/public/linkedin.png'
import gh from '/public/github.png'
import Link from 'next/link'


function Footer() {
  return (
  <div className={styles.container}>
    <div> @Catuhardoy {new Date().getFullYear()} - All rights reserved</div>
      <div className={styles.social}>
    <Link href = "https://www.linkedin.com/in/catalina-hardoy-8a3a48119/">
      <div>
        <Image src = {lk} height={35} width={35} alt='catu' className={styles.icon}/> 
      </div>
        </Link>
      <Link href= "https://github.com/catuhardoy">
    <div>
      <Image src = {gh} height={35} width={35} alt='catu' className={styles.icon}/>
    </div>
    </Link>
       </div>
    </div>
  );
}

export default Footer
