import styles from "../styles/Radios.module.css";
import { useState, useRef } from "react";

function Radios({ onNext }) {
  const options = [
    "Definitely False",   // 1
    "Somewhat False",     // 2
    "Moderately True",    // 3
    "True",               // 4
    "Definitely True",    // 5
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const inputRefs = useRef([]);

  const handleChange = (index) => {
   if (disabled) return;
  
   const inputEl = inputRefs.current[index];
   inputEl?.classList.add(styles.touched); // Add custom style
  
   setSelectedIndex(index);
   setDisabled(true);
  
   const score = index + 1;
  
   setTimeout(() => {
     inputEl?.classList.remove(styles.touched); // Clean up effect
     onNext(score);
     setSelectedIndex(null); // Uncheck the radio
     setDisabled(false);
     inputRefs.current.forEach(input => input?.blur());
   }, 1000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.radioContainer}>
        {options.map((label, index) => (
          <label
            key={index}
            style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            <input
              ref={(el) => inputRefs.current[index] = el}
              className={`${styles.radio} ${disabled && index !== selectedIndex ? styles.disabled : ''}`}
              type="radio"
              name="truth-scale"
              value={label}
              checked={selectedIndex === index}
              onChange={() => handleChange(index)}
              disabled={disabled}
          />
          </label>
        ))}
      </div>
      <div className={styles.labelContainer}>
        <p>Definitely<br />false</p>
        <p>Moderately<br />true</p>
        <p>Definitely<br />true</p>
      </div>
    </div>
  );
}

export default Radios;
