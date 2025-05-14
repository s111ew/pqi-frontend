import ButtonAlt from "../components/ButtonAlt"
import ButtonMain from "../components/ButtonMain"
import ContentContainer from "../components/ContentContainer"
import styles from "../styles/FourOhFour.module.css"
import shareIcon from "../assets/icons/Share.svg"
import TsopLogo from "../assets/icons/TSOPlogo.svg"
import tipIcon from "../assets/icons/Tip.svg"
import LoadingButterfly from "../assets/loading/LoadingButterfly.svg"
import LoadingButterflyMed from "../assets/loading/LoadingButterflyMed.svg"
import LoadingButterflySml from "../assets/loading/LoadingButterflySml.svg"
import { useEffect, useState } from "react"

function FourOhFour({ setShareModalVisible, setUser, setCurrentPage }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleShareClick = () => {
    setShareModalVisible(true);
  }

  const goToSop = () => {
    const url = "https://theschoolofplay.org/"
    window.open(url, '_blank');
  }

  const resetQuiz = () => {
    setUser('');
    setCurrentPage("intro");
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
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
        <h1 className={styles.title}>It looks like the page you're looking for doesn't exist... Or it's playing hide and seek</h1>
      </div>
      <div className={styles.buttonContainerInner}>
        <ButtonAlt isReverse={true} onClick={goToSop} buttonText={'The School of Play'} iconSrc={TsopLogo} iconAlt={'Back to The School of Play'}/>
        <ButtonMain onClick={resetQuiz} buttonText={'Retake quiz'} iconSrc={tipIcon} iconAlt={'save your results'} isOuter={true}/>
      </div>
    </>
  )

  return(
    <main className={styles.fourOhFour}>
      <div className={styles.buttonContainer}>
        <ButtonAlt onClick={handleShareClick} buttonText={screenWidth < 579 ? 'Share' : 'Share quiz'} iconSrc={shareIcon} iconAlt={'share quiz'}/>
      </div>
      <ContentContainer content={mainContent}/>
    </main>
  )
}

export default FourOhFour