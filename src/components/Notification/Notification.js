import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Notification extends Component {
    render() {
        return (
            <div style={{backgroundColor: this.props.color, padding:"10px", textAlign:"center"}}>
                {this.props.text}
            </div>
        );
    }
}

Notification.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
};

export default Notification;