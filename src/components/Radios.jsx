import styles from "../styles/Radios.module.css";
import { useState, useRef } from "react";

function Radios({ currentIndex, onNext }) {
  const options = [
    "Definitely False",   // 1
    "Somewhat False",     // 2
    "Moderately True",    // 3
    "True",               // 4
    "Definitely True",    // 5
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [animatingIndex, setAnimatingIndex] = useState(null); // use index instead of boolean
  const inputRefs = useRef([]);

  const handleChange = (index) => {
    if (disabled) return;

    setAnimatingIndex(index); // Start animation
    const inputEl = inputRefs.current[index];
    inputEl?.classList.add(styles.touched);

    setSelectedIndex(index);
    setDisabled(true);

    const score = index + 1;

    setTimeout(() => {
      setAnimatingIndex(null); // Stop animation
      inputEl?.classList.remove(styles.touched);
      onNext(score);
      setSelectedIndex(null);
      setDisabled(false);
      inputRefs.current.forEach(input => input?.blur());
    }, 500);
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
              className={`
                ${styles.radio}
                ${animatingIndex === index ? styles.animate : ''}
                ${disabled && index !== selectedIndex ? styles.disabled : ''}
              `}
              id={currentIndex >= 19 ? `finish-quiz-${index}` : ''}
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
