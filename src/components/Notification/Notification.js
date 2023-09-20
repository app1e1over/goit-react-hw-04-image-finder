import React from 'react';
import PropTypes from 'prop-types';

const Notification = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.color,
        padding: '10px',
        textAlign: 'center',
      }}
    >
      {props.text}
    </div>
  );
};

Notification.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Notification;
