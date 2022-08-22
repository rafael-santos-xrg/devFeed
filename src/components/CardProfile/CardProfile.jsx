import styles from './CardProfile.module.css'
import { PencilSimpleLine } from 'phosphor-react'

function CardProfile() {
  return (
    <aside className={styles.card}>
      <img 
        src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=100" 
        className={styles.coverProfile}
        alt="CoverProfile" 
      />
      <div className={styles.profileCardContent}>
        <img 
          className={styles.profileImage} 
          src="https://github.com/rafael-santos-xrg.png" 
          alt="ProfileImage"/>
        <p>Víctor Rafael</p>
        <span>Front-end Dev</span>
      </div>
      <footer className={styles.footer}>
        <a 
          href='#'
        >
          <PencilSimpleLine size={20}/>
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  )
}

export default CardProfile