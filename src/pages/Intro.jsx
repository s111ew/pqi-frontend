import ButtonAlt from "../components/ButtonAlt"
import ButtonMain from "../components/ButtonMain"
import ContentContainer from "../components/ContentContainer"
import SubContent from "../components/SubContent"
import styles from "../styles/Intro.module.css"
import shareIcon from "../assets/icons/Share.svg"

function Intro() {
  const mainContent = (
    <>
      <div className={styles.mainText}>
        <h1>Play Genius Quiz</h1>
        <p>Explore your relationship with true play to reclaim your gifts. Opt-in for tips to reconnect with your greatest superpower.</p>
      </div>
      <ButtonMain buttonText={'Let the games begin!'}/>
    </>
  )

  const subContent1 = (
    <>
      <h3 className={styles.subContainerTitle}>Why should I play?</h3>
      <ul className={styles.list}>
        <li className={styles.listItem}><div className={styles.bullet}></div><span>Shapes your brain and makes you smarter</span></li>
        <li className={styles.listItem}><div className={styles.bullet}></div><span>Creates a heart-to-heart connection</span></li>
        <li className={styles.listItem}><div className={styles.bullet}></div><span>Increases your resourcefulness</span></li>
        <li className={styles.listItem}><div className={styles.bullet}></div><span>Builds your resilience</span></li>
        <li className={styles.listItem}><div className={styles.bullet}></div><span>Amplifies your confidence</span></li>
      </ul>  
    </>
  )

  const subContent2 = (
    <>
      <h3 className={styles.subContainerTitle}>What will my Play Genius score reveal?</h3>
      <ul className={styles.list}>
        <li className={styles.listItem}><div className={styles.bullet}></div><span>Baselines your play intelligence</span></li>
        <li className={styles.listItem}><div className={styles.bullet}></div><span>Reveals 6 aspects of your relationship with play</span></li>
        <li className={styles.listItem}><div className={styles.bullet}></div><span>Highlights how you benefit from playing</span></li>
        <li className={styles.listItem}><div className={styles.bullet}></div><span>Points to opportunities for more play</span></li>
      </ul>
    </>
  )

  return(
    <main className={styles.intro}>
      <div className={styles.buttonContainer}><ButtonAlt buttonText={'Share quiz'} iconSrc={shareIcon} iconAlt={'share quiz'}/></div>
      <ContentContainer content={mainContent}/>
      <div className={styles.subContainer}>
        <SubContent content={subContent1}/>
        <SubContent content={subContent2}/>
      </div>
    </main>
  )
}

export default Intro