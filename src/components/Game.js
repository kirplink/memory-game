import React, { Component } from "react";
import Card from "./Card";
import character from "./character.json";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      highScore: 0,
      clicked: []
    };
  }

  handleClick = event => {
    const id = event.target.getAttribute("data-id");
    if (this.state.clicked.includes(id)) {
      this.setState({
          score: 0,
          clicked: []
      })
    } else if (!this.state.clicked.includes(id)) {
      this.setState(prevSate => ({ 
          score: this.state.score + 1,
          clicked: [...prevSate.clicked, id]
        }), () => {
            if (this.state.score > this.state.highScore) {
                this.setState({
                    highScore: this.state.score
                })
            }
        });
    }
    

  };

  shuffle = array => {
    var m = array.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
    // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

  render() {
    return (
      <div>
        <h1>Score: {this.state.score}</h1>
        <h1>High Score: {this.state.highScore}</h1>
        <div className="row mt-5 justify-content-md-center">
          {this.shuffle(character).map(data => {
            return (
              <Card
                onClick={this.handleClick}
                image={data.image}
                name={data.name}
                id={data.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Game;
