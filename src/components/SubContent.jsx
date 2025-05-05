import styles from "../styles/SubContent.module.css"

function SubContent({content}) {
  return(
    <section className={styles.container}>
      {content}
    </section>
  )
}

export default SubContent