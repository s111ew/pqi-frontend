import styles from '../styles/ButtonMain.module.css';
import { useState } from 'react';

function ButtonMain({ onClick, buttonText, iconSrc, iconAlt, isOuter, isDisabled }) {
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
      className={`${styles.button} ${isAnimating && !isDisabled ? styles.animate : ''} ${isOuter ? styles.outer : ''} ${isDisabled ? styles.disabled : ''}`}
      onClick={onClickDelay}
    >
      <p className={styles.buttonText}>{buttonText}</p>
      {iconSrc ? (
        <img className={styles.buttonIcon} src={iconSrc} alt={iconAlt} />
      ) : null}
    </div>
  );
}

export default ButtonMain;