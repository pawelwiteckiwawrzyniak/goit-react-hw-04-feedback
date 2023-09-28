import PropTypes from 'prop-types';
import { Fragment } from 'react';

export const Notification = ({ message }) => (
  <Fragment>
    <span>{message}</span>
  </Fragment>
);

Notification.propTypes = {
  message: PropTypes.string,
};
