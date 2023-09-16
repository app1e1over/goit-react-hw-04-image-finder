import React, { Component } from 'react';
import './styles.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import {load} from "./../Services/Thrower";
import Notification from './Notification/Notification';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      q: '',
      page: 1,
      more: false,
      modalObj: undefined
    };
  }

  setSearch = val => {
    if(val!==this.state.q){
      load({...this.state, q:val, page:1, images:[]}).then(r=>this.setState({...r})).finally(()=>this.setState({loading:false}));
      this.setState({
        q: val,
        page: 1,
        images: [],
        loading: true,
        modalObj:undefined
      });
    }
   
  };


  nextPage=()=>{
    let np = this.state.page+1;
    load({...this.state, page: np}).then(r=>this.setState({...r})).finally(()=>{this.setState({loading:false}); });
    this.setState({page:np, loading:true});

  }
  openModal=(h)=>{
    this.setState({modalObj:h})
  }


  componentDidUpdate(prevProps, prevState) {
    console.log("hi");
    if(this.state.modalObj===prevState.modalObj)
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }
  render() {
    const { images, q, modalObj, loading, more } = this.state;
    let displ="";
    if(loading){
      displ=(<Loader></Loader>)
    }else if(images.length>0) {
      if(more){
        displ=(<Button action={this.nextPage}></Button>)
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
        <Searchbar set={this.setSearch}></Searchbar>
        <ImageGallery images={images} openModal={this.openModal}></ImageGallery>
        
        {displ}
        
        {modalObj!==undefined?<Modal img = {modalObj} close={this.openModal}></Modal>:""}
      </div>
    );
  }
}
