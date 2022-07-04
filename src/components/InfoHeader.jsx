import React from 'react';

function InfoHeader(header){
	return (
		<div>
			<header className="info-right-header">
	    		<h1 className="info-h"> {header.header} </h1>
			</header>
		</div>
	)
}

export default InfoHeader;