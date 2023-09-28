import PropTypes from 'prop-types';
import { Notification } from '../Notification/Notification';
import css from './Statistics.module.css';
import { Fragment } from 'react';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statistics}>
      {total > 0 ? (
        <Fragment>
          <span className={css.statistics__data}>Good: {good}</span>
          <span className={css.statistics__data}>Neutral: {neutral}</span>
          <span className={css.statistics__data}>Bad: {bad}</span>
          <span className={css.statistics__data}>Total: {total}</span>
          <span className={css.statistics__data}>
            Positive feedback: {positivePercentage}%
          </span>{' '}
        </Fragment>
      ) : (
        <Notification message="No feedback given"></Notification>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};
