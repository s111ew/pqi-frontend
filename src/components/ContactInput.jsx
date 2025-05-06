import styles from "../styles/ContactInput.module.css"

function ContactInput({ textPlaceholder, buttonText}) {
  return(
    <div className={styles.inputContainer}>
      <input className={styles.input} placeholder={textPlaceholder}></input>
      <div className={styles.inputButton}>
        <p className={styles.buttonText}>{buttonText}</p>
      </div>
    </div>
  )
}

export default ContactInput