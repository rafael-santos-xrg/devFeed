import { HandsClapping, ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

function Comment () {
  return (
    <div className={styles.content}>
      <div>
        <img src="https://github.com/maykbrito.png" className={styles.img}/>
      </div>
      <div>
        <div className={styles.commentSpace}>
          <section>
            <div className={styles.header}>
              <p>Myke Brito</p>
              <span>Cerca de 1h</span>
            </div>
            <div>
              <button className={styles.trashButton}>
              <Trash size={24}/>
              </button>
            </div>
          </section>
          <main className={styles.commentText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis magnam laborum non totam iusto, consectetur suscipit sed. Autem soluta sed quam quo, delectus in voluptate quae nulla quis architecto at?
          </main>
        </div>
        <footer className={styles.clappingSpace}>
            <button className={styles.clapButton} >
              <span>
                <HandsClapping size={20} weight="duotone" />
              </span>
              <div className={styles.clappingCount}>
                Aplaudir
                <span>
                  10
                </span>
              </div>
            </button>
        </footer>
      </div>
    </div>
  )
}

export default Comment;