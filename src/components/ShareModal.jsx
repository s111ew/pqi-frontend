import ContentContainer from "./ContentContainer"
import styles from "../styles/ShareModal.module.css"
import { useState, useEffect, useRef } from "react";
import tipIcon from "../assets/icons/Info.svg"
import qrCode from "../../public/qrCode2.png"
import close from "../assets/icons/X.svg"

function ShareModal({ setShareModalVisible }) {
  const linkText = "http://quiz.theschoolofplay.org";
  const [copied, setCopied] = useState(false);
  const containerRef = useRef(null);

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
        <p>Scan the code below or copy the link to let others discover their play genius.</p>
      </div>
      <div className={styles.qrCode}>
        <img src={qrCode} alt="QR code" />
      </div>
      <div className={styles.copyContainer}>
        <div className={styles.copyText}>{linkText}
          <div className={`${styles.copyButton} ${copied ? styles.copied : ''}`} onClick={handleClick}>
            <p className={styles.buttonText}>{copied ? 'Copied to clipboard!' : "Copy"}</p>
          </div>
        </div>
        <div className={styles.disclaimerContainer}><img src={tipIcon} alt="info" /><span className={styles.disclaimer}>Save the link to retake the quiz anytime.</span></div>
      </div>
    </div>
  );

  return (
    <div className={styles.background}>
      <div className={styles.shareModal}>
        <div className={styles.closeButton}><img src={close} alt="close" /></div>
        <div ref={containerRef}>
          <ContentContainer content={content} />
        </div>
      </div>
    </div>
  );
}

export default ShareModal;
