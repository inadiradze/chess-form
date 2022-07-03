import React, {useContext, useState, useRef, useEffect} from 'react';
import {Context} from './PinfoForm';

function ErrorPopup(){

	const {error, setError} = useContext(Context);
	const popupRef = useRef();

	useEffect( () => {
		if(popupRef.current.style.display == "none"){
			popupRef.current.style.display="block";
		}
	}, [error]);

	function closeError(){
		popupRef.current.style.display="none";
	}

	return (

		<div ref={popupRef} className="error-popup">
			<div className="error-h">
				<img className="error-vector" src="src/assets/error-vector.png"></img>
				<span> Invalid {error.input} </span>
				<img className="close-btn" onClick={()=> closeError()} src="src/assets/close-btn.png"></img>
			</div>
			<p className="error-text"> {error.error } </p>
		</div>
	)
}

export default ErrorPopup;