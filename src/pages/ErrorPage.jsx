import React from 'react';
import { Link } from "react-router-dom";

function ErrorPage(){
	return (
		<div className="errorpage">
			<div className="errorpage-div">
				<h1> Sorry, this page does not exist :(</h1>
				<br></br>
				<Link to="/"> <p> Return back to the homepage </p> </Link>
			</div>
		</div>
	)
}

export default ErrorPage;