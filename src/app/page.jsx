import Image from 'next/image'
import styles from './page.module.css'
import dev from '/public/imagen.png'
import Button from './components/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>BIENVENIDXS</h1>
        <p className={styles.description}> <br /> SOY FULLSTACK DEVELOPER <br /> EN CONSTANTE BÚSQUEDA</p> 
        <Button url="/portfolio" text = "PORTFOLIO"></Button>
       
     </div>
    
    
    <div className={styles.imageContainer}>
      <Image src={dev} alt = '' className={`${styles.imgcontainer} ${styles.fade}`}/>
    </div>
   

    
    </div>

  )

}
