import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css'

class Button extends Component {
    render() {
        return (
            <button onClick={this.props.action} className='Button'>
                Load more
            </button>
        );
    }
}

Button.propTypes = {
    action: PropTypes.func
};

export default Button;