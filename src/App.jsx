import { useState } from 'react';
import './style.css';

function App() {

  return (
    <div className="App">
      <div className="home-div">

        <div className="home-left">
          <header className="home-header">
            <img src="src/assets/chess.png" className="chess-icon" alt="chess icon" />
            <span id="home-h"> Redberry Knight Cup </span>
          </header>
        </div>

        <div className="home-right">
          <div className="home-intro">
            <p className="home-text">chess says <span className="home-text-span">a lot about</span><br></br> who we are </p>
          </div>
          <div className="home-btn">
            <button> Get Started &nbsp; <img src="src/assets/btn-vector.png"></img></button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
