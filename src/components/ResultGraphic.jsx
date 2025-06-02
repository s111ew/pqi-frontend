import Bubble from './Bubble';
import styles from '../styles/Result.module.css';

const ResultGraphic = ({ scores, screenWidth, bubbleSizes }) => {
  const categories = [
    { type: 'physical', label: 'Physical Development', score: scores.physical, width: bubbleSizes.physical },
    { type: 'cognitive', label: 'Cognitive Development', score: scores.cognitive, width: bubbleSizes.cognitive },
    { type: 'social', label: 'Social Development', score: scores.social, width: bubbleSizes.social },
    { type: 'emotional', label: 'Emotional Development', score: scores.emotional, width: bubbleSizes.emotional },
    { type: 'systemic', label: 'Systemic Development', score: scores.systemic, width: bubbleSizes.systemic },
    { type: 'playful', label: 'Playful Behaviours', score: scores.playful, width: bubbleSizes.playful },
  ];

  return (
    <div className={styles.resultGraphic}>
      <p className={styles.resultPre}>Tap each category to reveal your results:</p>
      <div className={styles.bubbleContainer}>
        <div className={styles.bubbleRow}>
          <Bubble {...categories[0]} />
          <Bubble {...categories[1]} />
        </div>

        {screenWidth < 579 && (
          <div className={styles.bubbleRow}>
            <Bubble {...categories[2]} />
          </div>
        )}

        <div className={styles.bubbleRow}>
          {screenWidth > 579 && <Bubble {...categories[2]} />}
          <Bubble {...categories[3]} />
          <Bubble {...categories[4]} />
        </div>

        <div className={styles.bubbleRow}>
          <Bubble {...categories[5]} />
        </div>
      </div>
    </div>
  );
};

export default ResultGraphic;
