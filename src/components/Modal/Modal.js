import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./style.css"

class Modal extends Component {
    constructor(props){
        super(props);
        this.state={
            visible:false
        }
        this.listenerId=document.body.addEventListener("keyup", this.handleKeyUp);
    }
    handleKeyUp=(e)=>{
      if(e.key==="Escape"){
        this.props.close();
      }
    }
    componentWillUnmount(){
      document.removeEventListener(document.body, this.listenerId);
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
