import styles from './Home.module.scss'
import logoPNG from './logoPNG.png'

function Home() {
  return (
    <div className={styles.home}>
        <img src={logoPNG} width="250" height="200"/>      
    </div>
  )
}

export default Home