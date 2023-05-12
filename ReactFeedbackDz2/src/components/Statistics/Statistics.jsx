import styles from "./Statistics.module.css";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={styles.statistics}>
      <ul className={styles.statisticsList}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive Feedback: {positivePercentage}</li>
      </ul>
    </div>
  );
}
export default Statistics;
