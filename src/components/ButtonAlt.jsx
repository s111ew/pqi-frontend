import styles from '../styles/ButtonAlt.module.css'

function ButtonAlt({ isReverse, onClick, buttonText, iconSrc, iconAlt }) {
  return(
    <div className={styles.button} onClick={onClick}>
      {iconSrc && isReverse ? <img className={styles.buttonIcon} src={iconSrc} alt={iconAlt} /> : null}
      <p className={styles.buttonText}>{buttonText}</p>
      {iconSrc && !isReverse ? <img className={styles.buttonIcon} src={iconSrc} alt={iconAlt} /> : null }
    </div>
  )
}

export default ButtonAlt