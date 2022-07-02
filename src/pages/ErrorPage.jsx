import React from 'react';

function ErrorPage(){
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