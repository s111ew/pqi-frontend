import styles from '../styles/ButtonMain.module.css'

function ButtonMain({ buttonText, iconSrc, iconAlt }) {
  return(
    <div className={styles.button}>
      <p className={styles.buttonText}>{buttonText}</p>
      { iconSrc ? (<img className={styles.buttonIcon} src={iconSrc} alt={iconAlt}/>) : null }
    </div>
  )
}

export default ButtonMain