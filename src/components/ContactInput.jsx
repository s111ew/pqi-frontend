import { useState } from "react";
import styles from "../styles/ContactInput.module.css";
import infoIcon from "../assets/icons/Info.svg"
import errorIcon from "../assets/icons/WarningOctagon.svg"

function ContactInput({ user, setUser, textPlaceholder, buttonText }) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [sent, setSent] = useState(false);

  async function sendQuizResults(user) {
    const apiUrl = "https://pure-sea-06854-167a1dac32b6.herokuapp.com/send-results";
  
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: user.firstName,
          email: user.email,
          answers: user.answers,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send email");
      }
  
      const responseData = await response.json();
      console.log(responseData.message); // Email sent successfully
  
    } catch (error) {
      console.error("Error sending quiz results:", error);
    }
  }

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

      const updatedUser = { ...user, email: email };
      sendQuizResults(updatedUser);
  
      console.log(updatedUser);
      setSent(true);

      setTimeout(() => {
        setEmail('');
        setSent(false);
      }, 5000);
      
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
        <div className={styles.disclaimer}><img src={infoIcon} alt="tip" /><span>We won't share your information with others. Unsubscribe at anytime.</span></div>
      </div>
  );
}

export default ContactInput;
