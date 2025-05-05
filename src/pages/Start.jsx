import styles from "../styles/Start.module.css"

function Start() {
  return(
    <main className={styles.start}>
      <ContentContainer content={mainContent}/>
      <div className={styles.subContainer}>
        <p>Ready, steady, go!<br></br>Who's taking the quiz today?</p>
        <TextInput placeholderText={'Name'}/>
      </div>
    </main>
  )
}

export default Start