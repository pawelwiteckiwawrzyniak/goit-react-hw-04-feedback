import { useClick } from 'hooks/useClick';
import { Section } from './Section/Section';
import { Buttons } from './Buttons/Buttons';
import { Statistics } from './Statistics/Statistics';
import { Fragment } from 'react';

export const App = () => {
  const { good, neutral, bad, handleGood, handleNeutral, handleBad } =
    useClick();

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    const positivePercentage = (good / total) * 100;
    return positivePercentage.toFixed(0);
  };

  return (
    <Fragment>
      <Section title="Please leave feedback">
        <Buttons
          handleGood={handleGood}
          handleNeutral={handleNeutral}
          handleBad={handleBad}
        ></Buttons>
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics>
      </Section>
    </Fragment>
  );
};
