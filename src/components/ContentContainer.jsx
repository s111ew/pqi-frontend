import styles from "../styles/ContentContainer.module.css"

function ContentContainer({ content }) {
  return(
    <section className={styles.container}>
      {content}
    </section>
  )
}

export default ContentContainer