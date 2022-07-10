import React from 'react';

function ErrorPage(){

	document.title = "Redberry Chess | Error";

	return (
		<div className="errorpage">
			<div className="errorpage-div">
				<h1> Sorry, this page does not exist :(</h1>
				<br></br>
				<a href="/"> <p> Return back to the homepage </p> </a>
			</div>
		</div>
	)
}

export default ErrorPage;