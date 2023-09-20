import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "./style.css"

const Modal=(props)=> {
    const handleKeyUp=(e)=>{
      if(e.key==="Escape"){
        this.props.close();
      }
    }
  const [listenerId, setListenerId]=useState();
    setListenerId(document.body.addEventListener("keyup", handleKeyUp))
    useEffect(()=>{
      document.removeEventListener(document.body, listenerId);
    }, [listenerId])
 
    const {img, close} = props;
    return (
      <div className="overlay" onClick={()=>close()}>
        <div className="modal">
          <img src={img.largeImageURL} alt={img.tags} />
        </div>
      </div>
    );
  
}

Modal.propTypes = {
    img: PropTypes.object
};

export default Modal;
