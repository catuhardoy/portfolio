import React from 'react'
import styles from './Button.module.css'
import Link from 'next/link'

function Button({text, url}) {
  return (
    <div>
      <Link href={url}>
        <button className={styles.container}>{text}</button>
      </Link>
    </div>
  )
}

export default Button
