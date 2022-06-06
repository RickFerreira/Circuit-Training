import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy_right}>
        <span>Circuit Training - By Rick</span> &copy; 2022
      </p>
    </footer>
  )
}

export default Footer