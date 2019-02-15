import React, { Component } from "react";

class Card extends Component {
  constructor(props){
    super(props);
    this.state = { 
      isClicked: false 
    };
  }
  
  handleClick = event => {
    const clicked = event.target.getAttribute("data-clicked")
    if (clicked == "false") {
      console.log("FALSE!!!!")
      this.setState({
        isClicked: true
      })
    } else if (clicked == "true") {
      console.log("TRUE!!!!")
    }
  }
  
  render() {
    return (
      <div class="col-md-3 m-3 p-2 blue lighten-3 rounded z-depth-2 grow pointer" 
        onClick={this.handleClick}
        >
          <img class="img-fluid rounded z-depth-1" src={this.props.image} alt={this.props.name} data-clicked={this.state.isClicked} />
      </div>
    )
  }
}

export default Card;
