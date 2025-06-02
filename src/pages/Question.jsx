import ContentContainer from "../components/ContentContainer";
import ButtonAlt from "../components/ButtonAlt";
import ProgressBar from "../components/ProgressBar";
import Radios from "../components/Radios";
import styles from "../styles/Question.module.css"
import questions from "../tools/questions.js"
import { useState, useEffect } from "react";
import shareIcon from "../assets/icons/buttonIcons/ShareButton.svg"
import arrowIcon from "../assets/icons/buttonIcons/BackButton.svg"

function Question({ setShareModalVisible, setCurrentPage, user, setUser }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(() => {
    if (user && Array.isArray(user.answers)) {
      return user.answers.length;
    }
    return 0;
  });

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleShareClick = () => {
    setShareModalVisible(true);
  }

  const handleNext = (score) => {
    const { question, category } = questions[currentIndex];
    const newAnswer = { question, category, answer: score };

    setIsAnimating(true);
  
    setTimeout(() => {
      setCurrentIndex(currentIndex + 1);

      setUser((prev) => {
        if (!prev.answers) {
          return { ...prev, answers: [newAnswer] };
        }
  
        return {
          ...prev,
          answers: [...prev.answers, newAnswer],
        };
      });
  
      if (!(currentIndex < questions.length - 1)) {
        setCurrentPage("loading");
      }

      setTimeout(() => {
        setIsAnimating(false)
      }, 500)
    }, 500)
  };
  

  const handlePrevious = () => {
  if (currentIndex > 0) {
    setIsAnimating(true);

    setTimeout(() => {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);

      setUser((prev) => {
        const prevAnswers = prev.answers || [];
        const updatedAnswers = prevAnswers.slice(0, newIndex);

        if (updatedAnswers.length === 0) {
          // eslint-disable-next-line no-unused-vars
          const { answers, ...rest } = prev;
          return rest;
        }

        return {
          ...prev,
          answers: updatedAnswers,
        };
      });

      setIsAnimating(false);
    }, 500);
    } else if (currentIndex === 0) {
      setUser('');
      setCurrentPage("start");
    }
  };

  

  const mainContent = (
    <>
      <p className={`${styles.disclaimer} ${currentIndex !== 0 ? styles.whiteText : ''} ${isAnimating ? styles.fade : ''}`}>For each statement, choose the answer that best reflects how you are in reality, not as you should or would like to be.</p>
      <div className={styles.questionTextContainer}>
      <p>{`${currentIndex + 1} of ${questions.length}`}</p>
        <h2 className={`${styles.questionText} ${isAnimating ? styles.fade : ''}`}>{questions[currentIndex].question}</h2>
      </div>
      <Radios currentIndex={currentIndex} onNext={handleNext} />
    </>
  );

  return(
    <main className={styles.question}>
      <div className={styles.buttonContainer}>
        <ButtonAlt tabIndex={1} isReverse={true} onClick={handlePrevious} buttonText={currentIndex === 0 ? "Back" : "Previous question"} iconSrc={arrowIcon} iconAlt={'Back to previous page'}/>
        <ButtonAlt tabIndex={2} id={"share"} onClick={handleShareClick} buttonText={screenWidth < 579 ? 'Share' : 'Share quiz'} iconSrc={shareIcon} iconAlt={'share quiz'}/>
      </div>
      <ContentContainer isQuestion={true} content={mainContent}/>
      <div className={styles.progress}>
        <ProgressBar length={(currentIndex) * 5}/>
      </div>
    </main>
  )
}
export default Question