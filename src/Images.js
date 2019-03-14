import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Popup from "reactjs-popup";


class Images extends Component{

  render(){

    return(
      <>
          <p>{this.props.count}</p>
          <button onClick={this.props.incrementCount}>
          </button>
          <div className="images">
            <Popup trigger={
              <img src={this.props.images.thumbnailUrl} alt={this.props.images.title}/>
              }>
              {close => (
                <div className="content">
                  <a className="close" onClick={close}>&times;</a>
                  <img src={this.props.images.thumbnailUrl} alt={this.props.images.title}/>
                </div>
              )}
              </Popup>

          </div>


      </>
    );
  }
}

export default Images;
