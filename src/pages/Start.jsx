import { useState } from "react";
import styles from "../styles/Start.module.css";
import SubContent from "../components/SubContent";
import ContentContainer from "../components/ContentContainer";
import ButtonMain from "../components/ButtonMain";
import TextInput from "../components/TextInput";
import butterflyIcon from "../assets/backgroundIcons/Butterfly nudge.svg";
import lightbulbIcon from "../assets/backgroundIcons/Tiplarge.svg";

function Start({ setCurrentPage, setUser }) {
  const [name, setName] = useState("");

  const isValid = /[a-z0-9]/i.test(name);

  const handleClick = () => {
    if (isValid) {
      setCurrentPage("question");
      setUser({userName: {name}});
    }
  };

  const mainContent = (
    <>
      <div className={styles.mainText}>
        <p>Ready, steady, go!<br />Who's taking the quiz today?</p>
        <TextInput placeholderText="Name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <ButtonMain
        buttonText={"First question"}
        onClick={handleClick}
        className={!isValid ? 'disabled' : ""}
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
      <ContentContainer content={mainContent} />
      <div className={styles.subContainer}>
        <SubContent content={subContent1} backgroundImg={lightbulbIcon} />
        <SubContent content={subContent2} backgroundImg={butterflyIcon} />
      </div>
    </main>
  );
}

export default Start;
