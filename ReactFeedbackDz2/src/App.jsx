import React from "react";
import { useState } from "react";
import styles from "./App.module.css";
import FeedbackOptions from "./components/FeedbackOptions.jsx/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function countTotalFeedback() {
    const sum = good + neutral + bad; // Обраховуємо суму всіх значень good, neutral, bad
    return sum;
  }

  function countPositiveFeedbackPercentage() {
    const sum = countTotalFeedback();
    const percentage = Math.round((good / sum) * 100);
    return percentage;
  }

  return (
    <div className={styles.container}>
      <Section title={"Please Leave Feedback"}>
        <FeedbackOptions
          onGoodClick={() => setGood(good + 1)}
          onNeutralClick={() => setNeutral(neutral + 1)}
          onBadClick={() => setBad(bad + 1)}
        />
      </Section>

      <Section title={"Statistics"}>
        {countTotalFeedback() === 0 ? (
          <Notification message={"No feedbacks"} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}

export default App;
