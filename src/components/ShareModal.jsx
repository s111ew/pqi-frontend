import ContentContainerSmall from "./ContentContainerSmall"
import styles from "../styles/ShareModal.module.css"
import { useState, useEffect, useRef } from "react";
import tipIcon from "../assets/icons/Info.svg"
import qrCode from "../assets/qrCode2.png"
import close from "../assets/icons/X.svg"

function ShareModal({ setShareModalVisible }) {
  const [copied, setCopied] = useState(false);
  const containerRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const linkText = screenWidth < 579 ? "quiz.theschoolofplay.org" : "https://quiz.theschoolofplay.org";

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    setCopied(true);
    copyToClipboard(linkText);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  }

  useEffect(() => {
    function handleOutsideClick(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShareModalVisible(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setShareModalVisible]);

  const content = (
    <div className={styles.content}>
      <div className={styles.textContainer}>
        <h3>Share the fun!</h3>
        <p>Encourage your friends and colleagues to discover their play genius by scanning the code below or copying the link.</p>
      </div>
      <div className={styles.qrCode}>
        <img src={qrCode} alt="QR code" />
      </div>
      <div className={styles.copyContainer}>
        <div className={`${styles.copyBorder} ${copied ? styles.copied : ''}`}>
          <div className={`${styles.copyText} ${copied ? styles.copied : ''}`}>
            {linkText}
          </div>
          <div className={`${styles.copyButton} ${copied ? styles.copied : ''}`} onClick={handleClick}>
            <p className={styles.buttonText}>{copied ? 'Copied to clipboard!' : "Copy"}</p>
          </div>
        </div>
        <div className={styles.disclaimerContainer}><img src={tipIcon} alt="info" /><span className={styles.disclaimer}>Save the link to retake the quiz anytime</span></div>
      </div>
    </div>
  );

  return (
    <div className={styles.background}>
      <div className={styles.stickyContainer}>
        <div className={styles.shareModal}>
          <div className={styles.closeButton}><img src={close} alt="close" /></div>
          <div ref={containerRef}>
            <ContentContainerSmall content={content} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareModal;
