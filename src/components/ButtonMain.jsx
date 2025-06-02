import styles from '../styles/ButtonMain.module.css';
import { useState } from 'react';

function ButtonMain({ isAlt, onClick, buttonText, iconSrc, iconAlt, isOuter, isDisabled, id }) {
  const [isAnimating, setIsAnimating] = useState(false);

  function onClickDelay() {
    if (isAnimating) return;
    setIsAnimating(true)
    setTimeout(() => {
      onClick?.()
      setIsAnimating(false)
    }, 300)
  }

  return (
    <div
      id={id}
      className={`${styles.button} ${isAnimating && !isDisabled ? styles.animate : ''} ${isOuter ? styles.outer : ''} ${isDisabled ? styles.disabled : ''}`}
      onClick={onClickDelay}
    >
      {iconSrc && isAlt ? (
        <img className={styles.buttonIcon} src={iconSrc} alt={iconAlt} />
      ) : null}
      <p id={`${id}-text`} className={styles.buttonText}>{buttonText}</p>
      {iconSrc && !isAlt ? (
        <img className={styles.buttonIcon} src={iconSrc} alt={iconAlt} />
      ) : null}
    </div>
  );
}

export default ButtonMain;