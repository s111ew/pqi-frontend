import styles from '../styles/ButtonAlt.module.css'

function ButtonAlt({ buttonText, iconSrc, iconAlt }) {
  return(
    <div className={styles.button}>
      <p className={styles.buttonText}>{buttonText}</p>
      <img className={styles.buttonIcon} src={iconSrc} alt={iconAlt} />
    </div>
  )
}

export default ButtonAlt