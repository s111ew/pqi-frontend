import React, { useState } from 'react';
import styles from '../styles/Result.module.css';

const Bubble = ({ type, label, score, width }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsOpen(prev => !prev);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div
      onClick={handleClick}
      className={`
        ${styles.bubble}
        ${styles[type]}
        ${isOpen ? styles[`${type}Open`] : ''}
        ${isAnimating ? styles.animate : ''}
      `}
      style={{ width, height: width }}
    >
      <span className={styles.bubbleText}>
        {isOpen ? `${score} / ${type === 'playful' ? '25' : '15'}` : (
          <>{label.split(' ').map((word, i) => <React.Fragment key={i}>{word}<br /></React.Fragment>)}</>
        )}
      </span>
    </div>
  );
};

export default Bubble;
