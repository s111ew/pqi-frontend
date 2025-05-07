import styles from '../styles/ButtonAlt.module.css'

function ButtonAlt({ onClick, buttonText, iconSrc, iconAlt }) {
  return(
    <div className={styles.button} onClick={onClick}>
      <p className={styles.buttonText}>{buttonText}</p>
      {iconSrc ? <img className={styles.buttonIcon} src={iconSrc} alt={iconAlt} /> : null }
    </div>
  )
}

export default ButtonAlt