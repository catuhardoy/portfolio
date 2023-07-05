'use client'
import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'

const links = [
    {
        id: 1,
        title: 'Home',
        url: '/'
    },
    {
        id: 2,
        title: 'About',
        url: '/about'
    },
    {
        id: 3,
        title: 'Portfolio',
        url: '/portfolio'
    },
  
    {
        id: 4,
        title: 'Contact',
        url: '/contact'
    },
   
]

function Navbar() {
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>CATU HARDOY</Link>
      <div className={styles.links}>
        <DarkModeToggle/>
        {links.map((link) =>(
        <Link key = {link.id} href={link.url}>
        {link.title}
        </Link>
        ))}
        {/* <button
        className={styles.logout}
         onClick={()=>{
            console.log('logged out')
            }}> Logout </button> */}
      </div>
    </div>

  )
}

export default Navbar
