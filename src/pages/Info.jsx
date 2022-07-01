import React from 'react';
import Header from '../components/Header';

function Info(){
	return (
		<div className="pinfo-div">

	        <div className="pinfo-left">
          		<Header />
          		<div className="pinfo-intro">
	          		<p> “When you see a good move, <br></br> look for a better one.” </p>
	          		
	          		<p className="pinfo-intro-author"> -Emanuel Lasker </p>
          		</div>
	        </div>

	        <div className="pinfo-right">
	        	<header className="pinfo-right-header">
	        		<h1 className="pinfo-h"> Start Creating Your Account </h1>
        		</header>
        		
	        </div>
        </div>
	)
}

export default Info;