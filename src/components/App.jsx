import React, { Component } from 'react';
import './styles.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import {load} from "./../Services/Thrower";


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      q: '',
      page: 1,
      more: false
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
    load({...this.state, page: np}).then(r=>this.setState({images:r.images})).finally(()=>this.setState({loading:false}));
    this.setState({page:np, loading:true});
  }
  openModal=(h)=>{
    this.setState({modalObj:h})
  }
  render() {
    const { images, q, modalObj, loading, more } = this.state;
    return (
      <div className='App'>
        <Searchbar set={this.setSearch}></Searchbar>
        <ImageGallery images={images} openModal={this.openModal}></ImageGallery>
        {loading? (<Loader></Loader>) : images.length > 0 ? more ? (

          <Button action={this.nextPage}></Button>
        ):"No more results" : q === '' ? (
          'Write your promt to begin searching'
        ) : (
          'Nothing was found by your request'
        )}
        
        {modalObj!==undefined?<Modal img = {modalObj} close={this.openModal}></Modal>:""}
      </div>
    );
  }
}
