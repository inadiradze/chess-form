import React from "react";
import chessIcon from '/assets/chess.png';

function Header(){
	return (
		<header className="home-header">
            <img src={chessIcon} className="chess-icon" />
            <a href="/"><span className="home-h"> Redberry Knight Cup </span></a>
          </header>
  )
}

export default Header;