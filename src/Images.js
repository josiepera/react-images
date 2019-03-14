import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Popup from "reactjs-popup";


class Images extends Component{
  state={
    show: false
  }

  toggleInfo = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }
  render(){

    return(
      <div>

        <div className="like-btn" onClick={this.toggleInfo.bind(this)}>
          <button onClick={this.props.onClick}>Like
          </button>
        </div>

        {this.state.show &&
          <button id="unlike"onClick={this.props.onClick}>unlike
          </button>
        }
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


      </div>
    );
  }
}

export default Images;
