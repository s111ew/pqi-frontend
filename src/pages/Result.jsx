import ButtonAlt from "../components/ButtonAlt"
import ButtonMain from "../components/ButtonMain"
import ContentContainerSmall from "../components/ContentContainerSmall"
import ContactInput from "../components/ContactInput"
import SubContent from "../components/SubContent"
import styles from "../styles/Result.module.css"
import shareIcon from "../assets/icons/Share.svg"
import tipIcon from "../assets/icons/Tip.svg"
import headshot from "../assets/headshot.png"
import { best, worst } from "../tools/bestWorstCopy.js"
import { useEffect, useState } from "react"

function Result({ setCurrentPage, setShareModalVisible, user, setUser }) {
  const [lowest, setLowest] = useState();
  const [highest, setHighest] = useState();
  const [socialIsOpen, setSocialIsOpen] = useState(false);
  const [emotionalIsOpen, setEmotionalIsOpen] = useState(false);
  const [physicalIsOpen, setPhysicalIsOpen] = useState(false);
  const [playfulIsOpen, setPlayfulIsOpen] = useState(false);
  const [cognitiveIsOpen, setCognitiveIsOpen] = useState(false);
  const [systemicIsOpen, setSystemicIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const calculateHeaderText = () => {
    if (!user || !user.answers) return null;
    const percentage = calculatePercentage(user.answers);
    if (percentage < 40) {
      return (
        <p className={styles.niceOne}>Let's celebrate {user.firstName}!<br></br>You've made a start and<br></br>there's lots more room<br></br>for play.</p>
      )
    }
    if (percentage < 60) {
      return (
        <p className={styles.niceOne}>Yay {user.firstName}!<br></br>You're on your way to<br></br>more play.</p>
      )
    }
    if (percentage < 80) {
      return (
        <p className={styles.niceOne}>Nice one {user.firstName}!<br></br>You enjoy playing and <br></br>can definitely play more.</p>
      )
    }
    if (percentage >= 80) {
      return (
        <p className={styles.niceOne}>Wowsers {user.firstName}!<br></br>You play a lot. Keep it up.</p>
      )
    }
  }

  useEffect(() => {
    if (user && user.answers) {
      const { topCategory, bottomCategory } = getTopAndBottomCategories(user);
      setHighest(topCategory);
      setLowest(bottomCategory);
    }
  }, [user]);

  function getTopAndBottomCategories(data) {
    const scores = {};
  
    // Calculate cumulative scores for each category
    data.answers.forEach(({ category, answer }) => {
      if (!scores[category]) {
        scores[category] = 0;
      }
      scores[category] += answer;
    });
  
    let topCategory = null;
    let bottomCategory = null;
    let highestScore = -Infinity;
    let lowestScore = Infinity;
  
    // Determine top and bottom scoring categories
    for (const category in scores) {
      const score = scores[category];
      if (score > highestScore) {
        highestScore = score;
        topCategory = category;
      }
      if (score < lowestScore) {
        lowestScore = score;
        bottomCategory = category;
      }
    }
  
    return {
      topCategory,
      topScore: highestScore,
      bottomCategory,
      bottomScore: lowestScore,
    };
  }
  

  const goToCoaching = () => {
    const url = "https://theschoolofplay.org/coaching/"
    window.open(url, '_blank');
  }
  const goToCourses = () => {
    const url = "https://theschoolofplay.org/courses/"
    window.open(url, '_blank');
  }
  const goToChat = () => {
    const url = "https://calendly.com/portia-yz8/free-discovery-call-with-portia?month=2025-05"
    window.open(url, '_blank');
  }
  const handleClick = () => {
    setShareModalVisible(true)
  }
  const resetQuiz = () => {
    setUser('');
    setCurrentPage("intro");
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  }

  function calculateCategoryScores(data) {
    const categoryScores = {};
  
    data.answers.forEach(({ category, answer }) => {
      if (!categoryScores[category]) {
        categoryScores[category] = 0;
      }
      categoryScores[category] += answer;
    });
  
    return categoryScores;
  }

  const scores = calculateCategoryScores(user);

  const baseSizeVW = 10; // equivalent of 98px
  const scaleVW = 0.8; // each score point adds this much VW

  const socialWidth = `clamp(90px, ${baseSizeVW + (scores.social * scaleVW)}vw, 200px)`;
  const emotionalWidth = `clamp(90px, ${baseSizeVW + (scores.emotional * scaleVW)}vw, 200px)`;
  const physicalWidth = `clamp(90px, ${baseSizeVW + (scores.physical * scaleVW)}vw, 200px)`;
  const systemicWidth = `clamp(90px, ${baseSizeVW + (scores.systemic * scaleVW)}vw, 200px)`;
  const cognitiveWidth = `clamp(90px, ${baseSizeVW + (scores.cognitive * scaleVW)}vw, 200px)`;
  const playfulWidth = `clamp(90px, ${baseSizeVW + (scores.playful * scaleVW * 0.6)}vw, 200px)`;

  // const handlePageScroll = () => {
  //   const section = document.getElementById("email-section");
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const calculatePercentage = (answers) => {
    let total = 0;
    answers.forEach(answer => {
      total += answer.answer
    })
    return total;
  }

  const result = (
      <div className={`${styles.subContent} ${styles.large}`}>
        <div className={styles.resultContainer}>
          <div className={styles.resultIntro}>
            <p className={styles.resultPre}>Your Play Genius Score:</p>
            <div className={styles.numContainer}>
              <p className={styles.resultNum}>{calculatePercentage(user.answers)}</p>
              <p className={styles.percentage}>%</p>
            </div>
            {calculateHeaderText()}
          </div>
          <div className={styles.resultGraphic}>
            <p className={styles.resultPre}>Tap each category to reveal your results:</p>
            <div className={styles.bubbleContainer}>
              <div className={styles.bubbleRow}>
                <div onClick={() => {physicalIsOpen ? setPhysicalIsOpen(false) : setPhysicalIsOpen(true)}} className={`${styles.bubble} ${styles.physical} ${physicalIsOpen ? styles.physicalOpen : ''}`} style={{width: physicalWidth, height: physicalWidth}}><span className={styles.bubbleText}>{physicalIsOpen ? (`${scores.physical} / 15`) : (<>Physical<br></br>Development</>)}</span></div>
                <div onClick={() => {cognitiveIsOpen ? setCognitiveIsOpen(false) : setCognitiveIsOpen(true)}} className={`${styles.bubble} ${styles.cognitive} ${cognitiveIsOpen ? styles.cognitiveOpen : ''}`} style={{width: cognitiveWidth, height: cognitiveWidth}}><span className={styles.bubbleText}>{cognitiveIsOpen ? (`${scores.cognitive} / 15`) : (<>Cognitive<br></br>Development</>)}</span></div>
              </div>
              {screenWidth < 579 ?
              ( <div className={styles.bubbleRow}>
                  <div onClick={() => {socialIsOpen ? setSocialIsOpen(false) : setSocialIsOpen(true)}} className={`${styles.bubble} ${styles.social} ${socialIsOpen ? styles.socialOpen : ''}`} style={{width: socialWidth, height: socialWidth}}><span className={styles.bubbleText}>{socialIsOpen ? (`${scores.social} / 15`) : (<>Social<br></br>Development</>)}</span></div>
                </div> ) : ''}
              <div className={styles.bubbleRow}>
                { screenWidth > 579 ? ( <div onClick={() => {socialIsOpen ? setSocialIsOpen(false) : setSocialIsOpen(true)}} className={`${styles.bubble} ${styles.social} ${socialIsOpen ? styles.socialOpen : ''}`} style={{width: socialWidth, height: socialWidth}}><span className={styles.bubbleText}>{socialIsOpen ? (`${scores.social} / 15`) : (<>Social<br></br>Development</>)}</span></div> ) : ''}
                <div onClick={() => {emotionalIsOpen ? setEmotionalIsOpen(false) : setEmotionalIsOpen(true)}} className={`${styles.bubble} ${styles.emotional} ${emotionalIsOpen ? styles.emotionalOpen : ''}`} style={{width: emotionalWidth, height: emotionalWidth}}><span className={styles.bubbleText}>{emotionalIsOpen ? (`${scores.emotional} / 15`) : (<>Emotional<br></br>Development</>)}</span></div>
                <div onClick={() => {systemicIsOpen ? setSystemicIsOpen(false) : setSystemicIsOpen(true)}} className={`${styles.bubble} ${styles.systemic} ${systemicIsOpen ? styles.systemicOpen : ''}`} style={{width: systemicWidth, height: systemicWidth}}><span className={styles.bubbleText}>{systemicIsOpen ? (`${scores.systemic} / 15`) : (<>Systemic<br></br>Development</>)}</span></div>
              </div>
              <div className={styles.bubbleRow}>
                <div onClick={() => {playfulIsOpen ? setPlayfulIsOpen(false) : setPlayfulIsOpen(true)}} className={`${styles.bubble} ${styles.playful} ${playfulIsOpen ? styles.playfulOpen : ''}`} style={{width: playfulWidth, height: playfulWidth}}><span className={styles.bubbleText}>{playfulIsOpen ? (`${scores.playful} / 25`) : (<>Playful<br></br>Behaviours</>)}</span></div>
              </div>
            </div>
          </div>
      </div>
    <div className={styles.highestLowest}>
      <div className={styles.highestContainer}>
        <p className={styles.highestLowestHeader}>One of your high scoring categories:</p>
          {highest && best[highest] && (
            <>
              <p className={styles.highestLowestTitle}>{best[highest].title}</p>
              <p className={styles.highestLowestBody}>{best[highest].body}</p>
            </>
          )}
          </div>
          <div className={styles.lowestContainer}>
            <p className={styles.highestLowestHeader}>One of your low scoring categories:</p>
            {lowest && worst[lowest] && (
              <>
                <p className={styles.highestLowestTitle}>{worst[lowest].title}</p>
                <p className={styles.highestLowestBody}>{worst[lowest].body}</p>
              </>
            )}
      </div>
    </div>
    </div>
  )

  const content1 = (
    <div className={`${styles.subContent} ${styles.margin}`}>
      <h3>Ways to play with your result:</h3>
      <p>You may wish to set an intention to be more playful going forward... Choose to focus on a particular area of development such as physical development. Come up with ideas and pick one to try.</p>
      <p>We recommend taking this quiz regularly to help you keep track of and expand your play intelligence the way you want to.</p>
      <p>Past participants have said this can lead to remarkable results!</p>
    </div>
  )

  const content2 = (
    <div className={`${styles.subContent} ${styles.margin}`}>
      <h3>How can I develop my Play Genius?</h3>
      <p className={`${styles.bold} ${styles.leftAlign}`}>In life:</p>
      <ul>
        <li><div className={styles.bullet}></div><span>Think back to how you liked to play most as a child.</span></li>
        <li><div className={styles.bullet}></div><span>What would bring you most joy now as an adult?</span></li>
        <li><div className={styles.bullet}></div><span>Name at least one seemingly impossible dream.</span></li>
      </ul>
      <p className={`${styles.bold} ${styles.leftAlign}`}>At work:</p>
      <ul>
        <li><div className={styles.bullet}></div><span>Which area of play can you strengthen among colleagues?</span></li>
        <li><div className={styles.bullet}></div><span>How can you change your workplace for the better?</span></li>
        <li><div className={styles.bullet}></div><span>How could you have more fun at work?</span></li>
      </ul>
    </div>
  )

  const content3 = (
    <div className={styles.emailContainer}>
      <h2 className={styles.emailTitle}>Keep the fun going!</h2>
      <p>Get your results by email, with a full breakdown of your answers. Find out more of what your results say about your relationship with play.</p>
      <ContactInput user={user} setUser={setUser} textPlaceholder={'Email'} buttonText={screenWidth < 579 ? 'Save' : 'Save results'} />
    </div>
  )

  const content4 = (
    <div className={`${styles.subContent} ${styles.large} ${styles.getInTouchContainer}`}>
      <h3>Meet The Play Alchemist</h3>
      <img className={styles.headshot} src={headshot} alt="Portia Tung" />
      <p>Portia Tung is an organisational leadership coach, play researcher and Agile coach. She is dedicated to promoting happier adulthood through lifelong play.</p>
      <p>With 20+ years in enabling transformational change, Portia helps leaders and teams solve complex challenges while making work more enjoyable, effective and efficient.</p>
      <p className={styles.bold}>Book a free discovery session with Portia to explore ways to unlock human potential in your organisation and have fun doing it.</p>
      <div className={`${styles.buttonContainer} ${styles.singleButton}`}>
        <ButtonMain onClick={goToChat} buttonText={"Let's chat!"} />
      </div>
    </div>
  )

  const content5 = (
    <div className={`${styles.subContent} ${styles.large} ${styles.moreInfoContainer}`}>
      <h3>More about The School of Play</h3>
      <p>We at The School of Play cordially invite you and your organisation to reconnect with your greatest superpower to co-create positive organisational change.</p>
      <div className={styles.buttonContainer}>
        <ButtonMain onClick={goToCoaching} buttonText={"Explore coaching"} />
        <ButtonMain onClick={goToCourses} buttonText={"Browse courses"} />
      </div>
    </div>
  )

  return(
    <main className={styles.result}>
      <div className={styles.buttonContainer}>
        <ButtonMain onClick={resetQuiz} buttonText={'Retake quiz'} iconSrc={tipIcon} iconAlt={'save your results'} isOuter={true}/>
        <ButtonAlt onClick={handleClick} buttonText={screenWidth < 579 ? 'Share' : 'Share quiz'} iconSrc={shareIcon} iconAlt={'share quiz'}/>
      </div>
      <div className={styles.content}>
        <SubContent content={result}/>
        <ContentContainerSmall content={content3}/>
        <div className={styles.subContainer}>
          <SubContent content={content1}/>
          <SubContent content={content2}/>
        </div>
        <SubContent content={content4}/>
        <SubContent content={content5}/>
      </div>
    </main>
  )
}

export default Result