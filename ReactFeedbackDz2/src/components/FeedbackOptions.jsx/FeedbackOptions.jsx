import styles from "./FeedbackOptions.module.css";

function FeedbackOptions({ options, onGoodClick, onNeutralClick, onBadClick }) {
  return (
    <div className={styles.btnsSection}>
      <button onClick={onGoodClick}>Good</button>
      <button onClick={onNeutralClick}>Neutral</button>
      <button onClick={onBadClick}>Bad</button>
    </div>
  );
}
export default FeedbackOptions;
