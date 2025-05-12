import styles from "../styles/ContentContainerSmall.module.css"

function ContentContainerSmall({ content }) {
  return(
    <section className={`${styles.container}`}>
      {content}
    </section>
  )
}

export default ContentContainerSmall