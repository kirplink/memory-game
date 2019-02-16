import React, { Component } from "react";
import Card from "./Card";
import character from "./character.json";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      highScore: 0,
      clicked: [],
      message: "See if you can click each member of the Bluth family only once!"
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

  //code from https://bost.ocks.org/mike/shuffle/
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
        <p className="h4 tc">{this.state.message}</p>
        <div className="h4 tc">
          <span>Score: {this.state.score}</span>
          <span> | </span>
          <span>High Score: {this.state.highScore}</span>
        </div>
        <div className="row justify-content-md-center">
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
