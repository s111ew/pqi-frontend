import styles from '../styles/TextInput.module.css'

function TextInput({ placeholderText, value, onChange }) {
  return (
    <input
      className={styles.input}
      placeholder={placeholderText}
      value={value}
      onChange={onChange}
    />
  );
}

export default TextInput;
