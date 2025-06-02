import styles from '../styles/TextInput.module.css'

function TextInput({ tabIndex, placeholderText, value, onChange }) {
  return (
    <input
      tabIndex={tabIndex}
      className={styles.input}
      placeholder={placeholderText}
      value={value}
      onChange={onChange}
    />
  );
}

export default TextInput;
