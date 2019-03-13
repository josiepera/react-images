import React, { Component } from 'react';
import Images from './Images'

// renderImages = async (e) => {
//   e.preventDefault()
//   const apiCall = await fetch(`https://jsonplaceholder.typicode.com/photos`)
//   const data = await apiCall.json()
//     let images = data.map(d => {
//       return({
//         albumId: d.albumId,
//         id: d.id,
//         title: d.title,
//         url: d.url,
//         thumbnailUrl: d.thumbnailUrl
//       })
//     })
//     this.setState(prevState => ({
//       images
//   }))
// }
class ImageList extends Component{
  state = {
    albumId: '',
    id: '',
    title: '',
    url: '',
    thumbnailUrl: '',
    images: [],
    
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
    const showImages = this.state.images.map((d, i) => {
      return <Images images={d} />
    })
    // console.log(showImages)
    return(
        <div>
          {showImages}
        </div>

    );
  }
}

export default ImageList;
