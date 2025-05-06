import styles from "../styles/ProgressBar.module.css"

function ProgressBar({ length }) {

  return(
    <div className={styles.progressContainer}>
      <div className={styles.progress}>
        <div className={styles.bar} style={{width: `${length}%`}}></div>
      </div>
    </div>
  )
}

export default ProgressBar