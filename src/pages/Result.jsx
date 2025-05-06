import ButtonAlt from "../components/ButtonAlt"
import ButtonMain from "../components/ButtonMain"
import ContentContainer from "../components/ContentContainer"
import ContactInput from "../components/ContactInput"
import SubContent from "../components/SubContent"
import styles from "../styles/Result.module.css"
import shareIcon from "../assets/icons/Share.svg"
import tipIcon from "../assets/icons/Tip.svg"
import infoIcon from "../assets/icons/Info.svg"
import headshot from "../assets/headshot.png"

function Result({num, username}) {
  num = 60;
  username = 'Sam'
  const result = (
    <div className={`${styles.subContent} ${styles.large}`}>
      <div className={styles.resultContainer}>
        <div className={styles.resultIntro}>
          <p className={styles.resultPre}>Your Play Genius Score:</p>
          <div className={styles.numContainer}>
            <p className={styles.resultNum}>{num}</p>
            <p className={styles.percentage}>%</p>
          </div>
          <p className={styles.niceOne}>Nice one {username}!<br></br>You enjoy playing and <br></br>can definitely play more.</p>
        </div>
        <div className={styles.resultGraphic}>
          
        </div>
      </div>
    </div>
  )

  const content1 = (
    <div className={styles.subContent}>
      <h3>Ways to play with your result:</h3>
      <p>You may wish to set an intention to be more playful going forward... Choose to focus on a particular area of development such as physical development. Come up with ideas and pick one to try.</p>
      <p>We recommend taking this quiz regularly help you keep track of and expand your play intelligence the way you want to.</p>
      <p>Past participants have said this can lead to remarkable results!</p>
    </div>
  )

  const content2 = (
    <div className={styles.subContent}>
      <h3>How can I develop my Play Genius?</h3>
      <p>It is through play alchemy that we can enable transformational change that is fun, effective and efficient - at work, at home and anywhere we go.</p>
      <p>Incorporate Play Alchemy into your daily life to grow as a leader and a playmaker:</p>
      <ul>
        <li><div className={styles.bullet}></div><span>Restore, nourish and nurture your playful self</span></li>
        <li><div className={styles.bullet}></div><span>Expand your emotional range and capacity for joy</span></li>
        <li><div className={styles.bullet}></div><span>Navigate life's challenges with equanimity and verve</span></li>
        <li><div className={styles.bullet}></div><span>Enable transformational change &#40;in yourself as well as those you serve	&#41; and have fun doing it.</span></li>
      </ul>
    </div>
  )

  const content3 = (
    <div className={styles.emailContainer}>
      <h2 className={styles.emailTitle}>Keep the fun going!</h2>
      <p>Get your results by email, and find out what your results say about you and your relationship with play.</p>
      <div className={styles.inputContainer}>
        <ContactInput textPlaceholder={'Email'} buttonText={'Save results'} />
        <div className={styles.disclaimer}><img src={infoIcon} alt="tip" /><span>We don't share your information with others. Unsubscribe at anytime.</span></div>
      </div>
    </div>
  )

  const content4 = (
    <div className={`${styles.subContent} ${styles.large} ${styles.getInTouchContainer}`}>
      <h3>Meet the Play Alchemist</h3>
      <img className={styles.headshot} src={headshot} alt="Portia Tung" />
      <p>Portia is an Executive & Agile Coach and a Systemic Constellations Facilitator. She is dedicated to promoting happier adulthood through lifelong play.</p>
      <p>Based on Portia's 20+ years in enabling change in organisations and with individuals, it is through play alchemy that we can enable transformational change that is fun, effective and efficient - at work, at home and anywhere we go.</p>
      <p className={styles.bold}>Book a free discovery session with Portia to uncover the possibilities of Playful Leadership</p>
      <div className={`${styles.buttonContainer} ${styles.singleButton}`}>
        <ButtonMain buttonText={"Let's chat!"} />
      </div>
    </div>
  )

  const content5 = (
    <div className={`${styles.subContent} ${styles.large} ${styles.moreInfoContainer}`}>
      <h3>More about the School of Play</h3>
      <p>We at The School of Play cordially invite you to reconnect with your playful self - the most powerful resource you have - for living more of the life you dream of. </p>
      <div className={styles.buttonContainer}>
        <ButtonMain buttonText={"Explore coaching"} />
        <ButtonMain buttonText={"Browse courses"} />
      </div>
    </div>
  )

  return(
    <main className={styles.result}>
      <div className={styles.buttonContainer}>
        <ButtonAlt buttonText={'Share quiz'} iconSrc={shareIcon} iconAlt={'share quiz'}/>
        <ButtonMain buttonText={'Save your results'} iconSrc={tipIcon} iconAlt={'save your results'}/>
      </div>
      <div className={styles.content}>
        <SubContent content={result}/>
        <div className={styles.subContainer}>
          <SubContent content={content1}/>
          <SubContent content={content2}/>
        </div>
        <ContentContainer content={content3}/>
        <SubContent content={content4}/>
        <SubContent content={content5}/>
      </div>
    </main>
  )
}

export default Result