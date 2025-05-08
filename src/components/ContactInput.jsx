import { useState } from "react";
import styles from "../styles/ContactInput.module.css";
import infoIcon from "../assets/icons/Info.svg"
import errorIcon from "../assets/icons/WarningOctagon.svg"

function ContactInput({ setUser, textPlaceholder, buttonText }) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [sent, setSent] = useState(false);

  

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleClick = () => {
    if (isValidEmail(email)) {
      setEmailError(false);
      setUser((prev) => ({
        ...prev,
        email: email,
      }));
      setEmail('');
      setSent(true);
      //SEND EMAIL FUNCTION
    } else if (email !== '') {
      setEmailError(true);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (value === '' || isValidEmail(value)) {
      setEmailError(false);
    }
  };

  return (
    <div className={styles.outerInputContainer}>
        <div className={styles.inputContainer}>
          <input
            type="email"
            className={`${styles.input} ${emailError ? styles.error : ''}`}
            placeholder={textPlaceholder}
            value={email}
            onChange={handleChange}
          />
          <div className={`${styles.inputButton} ${sent ? styles.sent : ''}`} onClick={handleClick}>
            <p className={styles.buttonText}>{sent ? 'Check your inbox!' : buttonText}</p>
          </div>
        </div>
        {emailError ? <div className={`${styles.disclaimer} ${styles.errorDisclaimer}`}><img src={errorIcon} alt="tip" /><span>Please enter a valid email.</span></div> : ''}
        <div className={styles.disclaimer}><img src={infoIcon} alt="tip" /><span>We don't share your information with others. Unsubscribe at anytime.</span></div>
      </div>
  );
}

export default ContactInput;
