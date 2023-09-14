import React, { Component } from 'react';
import './styles.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import axios from 'axios';
import Loader from './Loader/Loader';

const key = '38473838-e891e831f166f48f183183908';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      q: '',
      page: 1,
    };
  }

  setSearch = val => {
    if(val!==this.state.q){
      this.load({q:val, page:1})

      this.setState({
        q: val,
        page: 1,
        images: [],
        loading: false,
        modalObj:undefined
      });
    }
   
  };


  load = st => {
    if(this.state.loading){
      console.log("no load");
      return;
    }
    if (st === undefined) st = this.state;
    const { q, page } = st;
    this.setState({loading:true})
    axios
      .get(
        `https://pixabay.com/api/?q=${q}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(r => r.data)
      .then(data => {
        let copy = [...this.state.images];
        if(copy.includes(data.hits[0])){
          return;
        }
        copy = copy.concat(data.hits);
        this.setState({ images: copy, loading:false });
      });
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    return nextState.images.length>0;
  };
  nextPage=()=>{
    let np = this.state.page+1;
    this.load({q:this.state.q, page: np})
    this.setState({page:np});
  }
  openModal=(h)=>{
    console.log(h);
    this.setState({modalObj:h})
  }
  render() {
    const { images, q, modalObj, loading } = this.state;
    return (
      <div className='App'>
        <Searchbar set={this.setSearch}></Searchbar>
        <ImageGallery images={images} openModal={this.openModal}></ImageGallery>
        {loading? (<Loader></Loader>) : images.length > 0 ? (
          <Button action={this.nextPage}></Button>
        ) : q === '' ? (
          'Write your promt to begin searching'
        ) : (
          'Nothing was found by your request'
        )}
        
        {modalObj!==undefined?<Modal img = {modalObj} close={this.openModal}></Modal>:""}
      </div>
    );
  }
}
