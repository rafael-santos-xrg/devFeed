import Header from "./components/Header/Header"
import CardProfile from "./components/CardProfile/CardProfile"
import PostFeed from "./components/PostFeed/PostFeed"

import styles from "./App.module.css"
import './global.css'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <CardProfile />
        <div className={styles.post}>
          <PostFeed />
          <PostFeed />
          <PostFeed />
        </div>
      </div>
    </div>
  )
}

export default App
