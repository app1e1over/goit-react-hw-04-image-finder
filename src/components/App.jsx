import React, { useState } from 'react';
import './styles.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import {load} from "./../Services/Thrower";
import Notification from './Notification/Notification';

export const App = ()=>{

    const [images, setImages] = useState([]);
    const [q, setQ] = useState("");
    const [page, setPage] = useState(1);
    const [more, setMore] = useState(false);
    const [loading, setLoading] = useState(false);
    const [modalObj, setModalObj] = useState(undefined);
    
 
  

  const setSearch = val => {
    if(val!==q){
      setQ(val);
      setPage(1);
      setImages([]);
      setLoading(true);
      setModalObj(undefined);
      load({q:val, page:1, images:[]}).then(r=>{setImages(r.images); setMore(r.more)}).finally(()=>{setLoading(false)});
    }
   
  };


  const nextPage=()=>{

    const np=page+1;
    setPage(np);
    setLoading(true);
    load({q, images, page: np}).then(r=>{setImages(r.images); setMore(r.more)}).finally(()=>{setLoading(false)});



  }
  const openModal=(h)=>{
    setModalObj(h);
  }


  // componentDidUpdate(prevProps, prevState) {
  //   console.log("hi");
  //   if(state.modalObj===prevState.modalObj)
  //   window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  // }
 
    let displ="";
    if(loading){
      displ=(<Loader></Loader>)
    }else if(images.length>0) {
      if(more){
        displ=(<Button action={nextPage}></Button>)
      }else{
        displ=(<Notification text={"No more results"} color={"#f44465"}></Notification>)
      }
    }else if(q==='') {
      displ=(<Notification text={"Enter your promt"} color={"#33f465"}></Notification>)
    }else{
      displ=(<Notification text={"Nothing was found by your search"} color={"#f444f5"}></Notification>)

    }
    return (
      <div className='App'>
        <Searchbar set={setSearch}></Searchbar>
        <ImageGallery images={images} openModal={openModal}></ImageGallery>
        
        {displ}
        
        {modalObj!==undefined?<Modal img = {modalObj} close={openModal}></Modal>:""}
      </div>
    );
  
}
