import Comment from '../Comments/Comment'
import styles from './PostFeed.module.css'

function PostFeed() {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <div className={styles.profileContent}>
          <img src="https://github.com/diego3g.png" alt="Diego Fernandes's Profile Picture" />
          <div>
            <p>Diego Fernandes</p>
            <span>CTO da @Rocketseat</span>
          </div>
        </div>
        <div className={styles.postTime}>Publicado hรก 1h</div>
      </section>
      <main className={styles.postText}>
        Fala galeraa ๐
        <br/>
        <br/>
        Acabei de subir mais um projeto no meu portifa. ร um projeto que fiz no NLW Return, evento da @Rocketseat. O nome do projeto รฉ DoctorCare ๐
        <br/>
        <br/>
        ๐ <a href='#'>
            diego3g.design/doctorcare        
           </a>
        <br/>
        <br/>
        <a href="#">
          #novoprojeto
        </a>{' '}
        <a href="#">
          #nlw
        </a>{' '}
        <a href="#">
         #rocketseat
        </a>{' '}
      </main>
      <footer className={styles.footer}>
        <span>
          Deixe seu feedback!
        </span>
        <textarea className={styles.textarea}/>
        <div>
          <button type="submit">Publicar</button>
        </div>
      </footer>
      <Comment />
    </div>
  )
}

export default PostFeed