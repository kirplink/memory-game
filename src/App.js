import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Card from "./components/Card"
import character from "./components/character.json"

function App() {
  return (
    <Router>
      <div className="container">
        <div className="row mt-5 justify-content-md-center">
          {
            character.map(data => {
              return <Card image={data.image} name={data.name} />
            }) 
          }
        </div>
      </div>
    </Router>
  )
}

export default App;