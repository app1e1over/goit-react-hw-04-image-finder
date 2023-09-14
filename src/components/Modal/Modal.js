import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./style.css"

class Modal extends Component {
    constructor(props){
        super(props);
        this.state={
            visible:false
        }
    }
  render() {
    const {img, close} = this.props;
    return (
      <div className="overlay" onClick={()=>close()}>
        <div className="modal">
          <img src={img.largeImageURL} alt={img.tags} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
    img: PropTypes.object
};

export default Modal;
