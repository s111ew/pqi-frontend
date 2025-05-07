import { useState } from "react";
import styles from "../styles/ContactInput.module.css";

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
  );
}

export default ContactInput;
