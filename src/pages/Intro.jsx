import ButtonAlt from "../components/ButtonAlt"
import styles from "../styles/Intro.module.css"

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
    <div className={styles.subContainer}>
      <h3 className={styles.subContainerTitle}>Why should I play?</h3>
      <ul>
        <li className={styles.listItem}>Shapes your brain and makes you smarter</li>
        <li className={styles.listItem}>Creates a heart-to-heart connection</li>
        <li className={styles.listItem}>Increases your resourcefulness</li>
        <li className={styles.listItem}>Builds your resilience</li>
        <li className={styles.listItem}>Amplifies your confidence</li>
      </ul>  
    </div>
  )

  const subContent2 = (
    <div className={styles.subContainer}>
      <h3 className={styles.subContainerTitle}>What will my Play Genius score reveal?</h3>
      <ul>
        <li className={styles.listItem}>Baselines your play intelligence</li>
        <li className={styles.listItem}>Reveals 6 aspects of your relationship with play</li>
        <li className={styles.listItem}>Highlights how you benefit from playing</li>
        <li className={styles.listItem}>Points to opportunities for more play</li>
      </ul>
    </div>
  )

  return(
    <main className={styles.intro}>
      <ButtonAlt buttonText={'Share quiz'} iconSrc={''} iconAlt={''}/>
      <ContentContainer content={mainContent}/>
      <div className={styles.subContainer}>
        <SubContent content={subContent1}/>
        <SubContent content={subContent2}/>
      </div>
    </main>
  )
}

export default Intro