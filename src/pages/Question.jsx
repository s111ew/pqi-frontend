import ContentContainer from "../components/ContentContainer";
import ButtonAlt from "../components/ButtonAlt";
import ProgressBar from "../components/ProgressBar";
import Radios from "../components/Radios";
import styles from "../styles/Question.module.css"

function Question() {
  let num = 1;

  let questionText = 'I am fit and healthy'

  const mainContent = (
    <div className={styles.questionContainer}>
      <p className={styles.disclaimer}>For each statement, choose the answer that best reflects how you are in reality, not as you should or would like to behave.</p>
      <div className={styles.questionTextContainer}>
        <p>{`${num} of 20`}</p>
        <h2 className={styles.questionText}>{questionText}</h2>
      </div>
      <Radios />
    </div>
  );

  return(
    <main className={styles.question}>
      <ContentContainer content={mainContent}/>
      <div className={styles.progress}>
        <ButtonAlt buttonText={'Previous question'}/>
        <ProgressBar length={20}/>
      </div>
    </main>
  )
}
export default Question