import React from 'react';

function FormHeader(header) {

	return (
		<header className="info-form-h">
			<h1> {header.header} </h1>
			<p> This is basic informations Fields </p>
		</header>
	)
}

export default FormHeader;