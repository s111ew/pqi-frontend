import styles from "../styles/Radios.module.css";
import { useState } from "react";

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

  const handleChange = (index) => {
    if (disabled) return;

    setSelectedIndex(index);
    setDisabled(true);

    const score = index + 1;

    setTimeout(() => {
      onNext(score);
      setSelectedIndex(null); // uncheck the radio
      setDisabled(false);
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
