import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Popup from "reactjs-popup";


class Images extends Component{
  state={
    show: false,
    condition: false
  }

  handleClick() {
    this.setState({
      condition: !this.state.condition
    });
  }

  toggleInfo = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }
  render(){

    return(
      <div>

        <div onClick={ this.handleClick.bind(this) } className= { this.state.condition ? "button toggled" : "button" }>
          <div onClick={this.props.onClick}>Like
          </div>
        </div>


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
