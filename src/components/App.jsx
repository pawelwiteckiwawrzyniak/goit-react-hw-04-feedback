import { Section } from './Section/Section';
import { Buttons } from './Buttons/Buttons';
import { Statistics } from './Statistics/Statistics';
import { Component, Fragment } from 'react';

export class App extends Component {
  static defaultProps = {
    step: 1,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGood = () => {
    this.setState((state, props) => ({
      good: state.good + props.step,
    }));
  };

  handleClickNeutral = () => {
    this.setState((state, props) => ({
      neutral: state.neutral + props.step,
    }));
  };

  handleClickBad = () => {
    this.setState((state, props) => ({
      bad: state.bad + props.step,
    }));
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    const positivePercentage = (this.state.good / total) * 100;
    return positivePercentage.toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Fragment>
        <Section title="Please leave feedback">
          <Buttons
            handleGood={this.handleClickGood}
            handleNeutral={this.handleClickNeutral}
            handleBad={this.handleClickBad}
          ></Buttons>
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      </Fragment>
    );
  }
}
