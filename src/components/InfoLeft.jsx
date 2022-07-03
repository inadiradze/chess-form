import React from 'react';
import Header from './Header';

function InfoLeft(){
	return (
        <div className="info-left">
      		<Header />
      		<div className="info-intro">
          		<p> “When you see a good move, <br></br> look for a better one.” </p>
          		
          		<p className="info-intro-author"> -Emanuel Lasker </p>
      		</div>
        </div>
    )
}

export default InfoLeft;