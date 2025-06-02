import styles from '../styles/ButtonMain.module.css';
import { useState } from 'react';

function ButtonMain({ tabIndex, isAlt, onClick, buttonText, iconSrc, iconAlt, isOuter, isDisabled, id }) {
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

  return (
    <div
      role='button'
      tabIndex={tabIndex}
      id={id}
      className={`${iconSrc ? styles.hasIcon : ''} ${styles.button} ${isAnimating && !isDisabled ? styles.animate : ''} ${isOuter ? styles.outer : ''} ${isDisabled ? styles.disabled : ''}`}
      onClick={onClickDelay}
      onKeyDown={handleKeyDown}
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