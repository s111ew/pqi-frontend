import ButtonAlt from "../components/ButtonAlt"
import ContentContainer from "../components/ContentContainer"
import styles from "../styles/Loading.module.css"
import shareIcon from "../assets/icons/Share.svg"
import LoadingButterfly from "../assets/loading/LoadingButterfly.svg"
import LoadingButterflyMed from "../assets/loading/LoadingButterflyMed.svg"
import LoadingButterflySml from "../assets/loading/LoadingButterflySml.svg"
import { useEffect, useState } from "react"

function Loading({ setCurrentPage, setShareModalVisible }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setCurrentPage("result");
    }, 5000)
  })

  const handleShareClick = () => {
    setShareModalVisible(true);
  }

  const mainContent = (
    <>
      <img className={styles.butterfly} 
        src={
          screenWidth > 994
          ? LoadingButterfly
          : screenWidth > 578
          ? LoadingButterflyMed
          : LoadingButterflySml
        } alt="butterfly motif" />
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>We're calculating your score...</h1>
      </div>
      <div className={styles.animationContainer}>
        <div className={styles.animation}>
          <div className={styles.ball}></div>
          <div className={styles.ball}></div>
          <div className={styles.ball}></div>
          <div className={styles.ball}></div>
          <div className={styles.ball}>
        </div>
      </div>
      </div>
      <div className={styles.body}>
        <p>Taking this quiz regularly helps you keep track of and expand your play intelligence the way you want to</p>
      </div>
    </>
  )

  return(
    <main className={styles.loading}>
      <div className={styles.buttonContainer}>
        <ButtonAlt onClick={handleShareClick} buttonText={screenWidth < 579 ? 'Share' : 'Share quiz'} iconSrc={shareIcon} iconAlt={'share quiz'}/>
      </div>
      <ContentContainer content={mainContent}/>
    </main>
  )
}

export default Loading