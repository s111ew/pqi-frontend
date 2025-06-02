import styles from '../styles/ButtonAlt.module.css'
import { useState } from 'react'

function ButtonAlt({ tabIndex, isReverse, onClick, buttonText, iconSrc, iconAlt, id }) {
  const [isAnimating, setIsAnimating] = useState(false);

  function onClickDelay() {
    if (isAnimating) return;
    setIsAnimating(true)
    setTimeout(() => {
      onClick?.()
      setIsAnimating(false)
    }, 300)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onClickDelay();
    }
  };
  
  return(
    <div role='button' onKeyDown={handleKeyDown} tabIndex={tabIndex} id={id} className={`${styles.button} ${isAnimating ? styles.animate : ''}`} onClick={onClickDelay}>
      {iconSrc && isReverse ? <img className={styles.buttonIcon} src={iconSrc} alt={iconAlt} /> : null}
      <p className={styles.buttonText}>{buttonText}</p>
      {iconSrc && !isReverse ? <img className={styles.buttonIcon} src={iconSrc} alt={iconAlt} /> : null }
    </div>
  )
}

export default ButtonAlt