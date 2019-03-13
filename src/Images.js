import React, { Component } from 'react';

class Images extends Component{
  render(){
    return(
        <div>
          <img src={this.props.images.thumbnailUrl} alt="random"/>
        </div>

    );
  }
}

export default Images;
