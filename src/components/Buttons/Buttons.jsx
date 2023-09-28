import PropTypes from 'prop-types';
import css from './Buttons.module.css';

export const Buttons = ({ handleGood, handleNeutral, handleBad }) => {
  return (
    <div className={css.box}>
      <button onClick={handleGood} className={css.box__button}>
        Good
      </button>
      <button onClick={handleNeutral} className={css.box__button}>
        Neutral
      </button>
      <button onClick={handleBad} className={css.box__button}>
        Bad
      </button>
    </div>
  );
};

Buttons.propTypes = {
  handleGood: PropTypes.func,
  handleNeutral: PropTypes.func,
  handleBad: PropTypes.func,
};
