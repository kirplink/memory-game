import React, { Component } from "react";

class Card extends Component {
  
  
  render() {
    return (
      <div 
        class="col-md-3 mx-3 mb-4 p-2 blue lighten-3 rounded z-depth-2 grow pointer mt0" 
        onClick={this.props.onClick}
        >
          <img 
            class="img-fluid rounded z-depth-1" 
            src={this.props.image} 
            alt={this.props.name} 
            data-id={this.props.id} 
          />
      </div>
    )
  }
}

export default Card;
