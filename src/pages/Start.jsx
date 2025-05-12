import { useState } from "react";
import styles from "../styles/Start.module.css";
import SubContent from "../components/SubContent";
import ContentContainer from "../components/ContentContainer";
import ButtonMain from "../components/ButtonMain";
import TextInput from "../components/TextInput";
import butterflyIcon from "../assets/backgroundIcons/Butterfly nudge.svg";
import lightbulbIcon from "../assets/backgroundIcons/Tiplarge.svg";
import shareIcon from "../assets/icons/Share.svg"
import arrowIcon from "../assets/icons/arrowLeft.svg"
import ButtonAlt from "../components/ButtonAlt";
import infoIcon from "../assets/icons/Info.svg"
import infoErrorIcon from "../assets/icons/InfoError.svg"

function Start({ setShareModalVisible, setCurrentPage, setUser }) {
  const [firstName, setfirstName] = useState("");
  const [isValidName, setIsValidName] = useState(false);
  const [isDisclaimerErr, setIsDisclaimerErr] = useState(false);

  const goBack = () => {
    setCurrentPage("intro")
  }

  const handleShareClick = () => {
    setShareModalVisible(true);
  }

  const isValid = /[a-z0-9]/i.test(firstName);

  const handleClick = () => {
    if (isValid) {
      setCurrentPage("question");
      setUser({firstName});
    } else {
      setIsDisclaimerErr(true);
    }
  };

  const mainContent = (
    <>
      <div className={styles.mainText}>
        <p>Ready, steady, go!<br />Who's taking the quiz today?</p>
        <div className={styles.inputContainer}>
          <TextInput placeholderText="Name" value={firstName} onChange={(e) => {
            const name = e.target.value;
            setfirstName(name);
            if (/[a-z0-9]/i.test(name)) {
              setIsValidName(true);
              if (isDisclaimerErr) {
                setIsDisclaimerErr(false);
              }
            } else {
              setIsValidName(false);
            }
          }} />
          <div className={`${styles.disclaimer} ${isDisclaimerErr ? styles.err : ''}`}><img src={isDisclaimerErr ? infoErrorIcon : infoIcon} alt="tip" /><span>Please enter your first name to continue.</span></div>
        </div>
      </div>
      <ButtonMain
        buttonText={"First question"}
        onClick={handleClick}
        isDisabled={isValidName ? false : true}
      />
    </>
  );

  const subContent1 = (
    <>
      <h3 className={styles.subContainerTitle}>Top Tip</h3>
      <p>If you are uncertain on how to answer a question, decipher and define its meaning for yourself</p>
    </>
  );

  const subContent2 = (
    <>
      <h3 className={styles.subContainerTitle}>Friendly Nudge</h3>
      <div className={styles.subContainerText}>
        <p>This quiz only provides a snapshot of your current relationship with play.</p>
        <p>It doesn't determine your play future. You do.</p>
      </div>
    </>
  );

  return (
    <main className={styles.start}>
      <div className={styles.buttonContainer}>
        <ButtonAlt isReverse={true} onClick={goBack} buttonText={'Back'} iconSrc={arrowIcon} iconAlt={'Back to previous page'}/>
        <ButtonAlt onClick={handleShareClick} buttonText={'Share quiz'} iconSrc={shareIcon} iconAlt={'share quiz'}/>
      </div>
      <ContentContainer content={mainContent} />
      <div className={styles.subContainer}>
        <SubContent content={subContent1} backgroundImg={lightbulbIcon} />
        <SubContent content={subContent2} backgroundImg={butterflyIcon} />
      </div>
    </main>
  );
}

export default Start;
