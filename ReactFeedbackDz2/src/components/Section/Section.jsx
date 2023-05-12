import styles from "./Section.module.css";

function Section({ title, children }) {
  return (
    <div className={styles.containerSection}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}
export default Section;
