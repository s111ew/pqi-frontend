import styles from '../styles/TextInput.module.css'

function TextInput({ placeholderText }) {
  return(
    <input className={styles.input} placeholder={placeholderText}></input>
  )
}

export default TextInput