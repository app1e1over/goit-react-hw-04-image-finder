import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

const Button =(props)=> {

        return (
            <button onClick={props.action} className='Button'>
                Load more
            </button>
        );
    
}

Button.propTypes = {
    action: PropTypes.func
};

export default Button;