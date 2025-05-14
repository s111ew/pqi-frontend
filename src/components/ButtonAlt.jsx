import styles from '../styles/ButtonAlt.module.css'
import { useState } from 'react'

function ButtonAlt({ isReverse, onClick, buttonText, iconSrc, iconAlt }) {
  const [isAnimating, setIsAnimating] = useState(false);

  function onClickDelay() {
    if (isAnimating) return;
    setIsAnimating(true)
    setTimeout(() => {
      onClick?.()
      setIsAnimating(false)
    }, 300)
  }
  
  return(
    <div className={`${styles.button} ${isAnimating ? styles.animate : ''}`} onClick={onClickDelay}>
      {iconSrc && isReverse ? <img className={styles.buttonIcon} src={iconSrc} alt={iconAlt} /> : null}
      <p className={styles.buttonText}>{buttonText}</p>
      {iconSrc && !isReverse ? <img className={styles.buttonIcon} src={iconSrc} alt={iconAlt} /> : null }
    </div>
  )
}

export default ButtonAlt