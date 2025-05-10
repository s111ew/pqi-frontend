import styles from '../styles/ButtonMain.module.css';

function ButtonMain({ onClick, buttonText, iconSrc, iconAlt, isOuter }) {
  return (
    <div
      className={`${styles.button} ${isOuter ? styles.outer : ''}`}
      onClick={onClick}
    >
      <p className={styles.buttonText}>{buttonText}</p>
      {iconSrc ? (
        <img className={styles.buttonIcon} src={iconSrc} alt={iconAlt} />
      ) : null}
    </div>
  );
}

export default ButtonMain;