import styles from "../styles/Radios.module.css"

function Radios() {
  const options = [
    "Definitely False",
    "Somewhat False",
    "Moderately True",
    "True",
    "Definitely True",
  ];

  return(
    <div className={styles.container}>
      <div className={styles.radioContainer}>
          {options.map((label, index) => (
          <label key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <input
              className={styles.radio}
              type="checkbox"
              name="truth-scale"
              value={label}
            />
          </label>
        ))}
      </div>
      <div className={styles.labelContainer}>
      <p>Definitely<br></br>false</p>
      <p>Moderately<br></br>true</p>
      <p>Definitely<br></br>true</p>
    </div>
  </div>
  )
}

export default Radios