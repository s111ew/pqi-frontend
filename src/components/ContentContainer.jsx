import styles from "../styles/ContentContainer.module.css"

function ContentContainer({ isQuestion, content }) {
  return(
    <section className={`${styles.container} ${isQuestion ? styles.question : ''}`}>
      {content}
    </section>
  )
}

export default ContentContainer