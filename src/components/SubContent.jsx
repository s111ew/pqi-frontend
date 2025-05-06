import styles from "../styles/SubContent.module.css"

function SubContent({ content, backgroundImg }) {
  const sectionStyle = backgroundImg
    ? {
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top left',
        backgroundSize: '122px 122px',
      }
    : undefined;

  return (
    <section className={styles.container} style={sectionStyle}>
      {content}
    </section>
  );
}

export default SubContent;