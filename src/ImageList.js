import React, { Component } from 'react';
import Images from './Images';



class ImageList extends Component{
  state = {
    albumId: '',
    id: '',
    title: '',
    url: '',
    thumbnailUrl: '',
    images: [],
    currentPage: 1,
    imagesPerPage: 10,
    count: 0
    }


    incrementCount(){

      this.setState((prevState) => ({
      	   count: prevState.count + 1
        }));
    }

  handleClick(event){

    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then( res => res.json() )
      .then( data => {
        let images = data.map(d => {
          return({
            albumId: d.albumId,
            id: d.id,
            title: d.title,
            url: d.url,
            thumbnailUrl: d.thumbnailUrl
          })
        })
        this.setState(prevState => ({
          images
        }))
        console.log(images)
      })
  }




  render(){


    const { images, currentPage, imagesPerPage } = this.state;

    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);


    const showImages = currentImages.map((d, i) => {
      return <Images images={d} onClick={this.incrementCount.bind(this)}/>
    })

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(images.length / 10); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={(e) => this.handleClick(e)}
        >
          {number}
        </li>
      );
    });

    return(
    <>
      <h2>{this.state.count}</h2>

      <button onClick={this.incrementCount.bind(this)}>
      +
      </button>
      <div>
        <ul id="image-container">
          {showImages}
        </ul>
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
      </div>
    </>
    );
  }
}

export default ImageList;
