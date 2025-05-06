import styles from '../styles/ButtonMain.module.css';
import classNames from 'classnames';

function ButtonMain({ onClick, buttonText, iconSrc, iconAlt, className }) {
  return (
    <div
      className={classNames(styles.button, className)}
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