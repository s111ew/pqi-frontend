import ContentContainer from "../components/ContentContainer";
import ButtonAlt from "../components/ButtonAlt";
import ProgressBar from "../components/ProgressBar";
import Radios from "../components/Radios";
import styles from "../styles/Question.module.css"
import questions from "../tools/questions.js"
import { useState } from "react";

function Question({ setCurrentPage, user, setUser }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = (score) => {
      setCurrentIndex(currentIndex + 1);
      setUser((prev) => {
        const newAnswer = { question: questions[currentIndex], answer: score };
      
        // If answers doesn't exist, create it as a new array
        if (!prev.answers) {
          return { ...prev, answers: [newAnswer] };
        }
      
        // If answers already exists, append to it
        return {
          ...prev,
          answers: [...prev.answers, newAnswer],
        };
      });
      if (!(currentIndex < questions.length - 1)) {
        setCurrentPage("result");
    }
    console.log(user)
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
  
      setUser((prev) => {
        if (!prev.answers || prev.answers.length === 0) {
          return prev; // nothing to remove
        }
  
        const updatedAnswers = [...prev.answers];
        updatedAnswers.pop(); // remove the last answer
  
        // If the array is now empty, omit the 'answers' key entirely
        if (updatedAnswers.length === 0) {
          // eslint-disable-next-line no-unused-vars
          const { answers, ...rest } = prev; // destructure to exclude 'answers'
          return rest;
        }
  
        return {
          ...prev,
          answers: updatedAnswers,
        };
      });
    }
  };

  const mainContent = (
    <div className={styles.questionContainer}>
      <p className={styles.disclaimer}>For each statement, choose the answer that best reflects how you are in reality, not as you should or would like to behave.</p>
      <div className={styles.questionTextContainer}>
      <p>{`${currentIndex + 1} of ${questions.length}`}</p>
        <h2 className={styles.questionText}>{questions[currentIndex].question}</h2>
      </div>
      <Radios onNext={handleNext} />
    </div>
  );

  return(
    <main className={styles.question}>
      <ContentContainer content={mainContent}/>
      <div className={styles.progress}>
        <ButtonAlt onClick={handlePrevious} buttonText={'Previous question'}/>
        <ProgressBar length={(currentIndex) * 5}/>
      </div>
    </main>
  )
}
export default Question