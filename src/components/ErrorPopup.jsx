import React, {useContext, useState, useRef, useEffect} from 'react';
import {Context} from './PinfoForm';
import ErrorVector from '/assets/error-vector.png';
import CloseBtn from '/assets/close-btn.png';





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
				<img className="error-vector" src={ErrorVector}></img>
				<span> Invalid {error.input} </span>
				<img className="close-btn" onClick={()=> closeError()} src={CloseBtn}></img>
			</div>
			<p className="error-text"> {error.error } </p>
		</div>
	)
}

export default ErrorPopup;