import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function PinfoForm(){

	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");
	const [dob, setDob] = useState("");
	const [formStatus, setFormStatus] = useState(false);
	const nameRef = useRef();
	const emailRef = useRef();
	const numberRef = useRef();
	const dobRef = useRef();

	useEffect( () => {
		showSavedInfo();
	}, []);

	function showSavedInfo(){
		localStorage.getItem("name") !== null && setName(localStorage.getItem("name"));

		localStorage.getItem("email") !== null && setEmail(localStorage.getItem("email"));

		localStorage.getItem("number") !== null && setNumber(localStorage.getItem("number"));

		localStorage.getItem("dob") !== null && setDob(localStorage.getItem("dob"));
	}

	function storeInfo(){

		const nameVector =document.querySelector(".done-name");
		const numberVector =document.querySelector(".done-number");
		const emailVector =document.querySelector(".done-email");
		const dobVector =document.querySelector(".done-dob");

		localStorage.setItem("name", nameRef.current.value);
		localStorage.setItem("email", emailRef.current.value);
		localStorage.setItem("number", numberRef.current.value);
		localStorage.setItem("dob", dobRef.current.value);

		if(nameRef.current.checkValidity()){
			nameVector.style.display="inline-flex";
		}else{
			nameVector.style.display="none";
		}

		if(emailRef.current.checkValidity()){
			emailVector.style.display="inline-flex";
		}else{
			emailVector.style.display="none";
		}

		if(numberRef.current.checkValidity()){
			numberVector.style.display="inline-flex";
		}else{
			numberVector.style.display="none";
		}

		if(dobRef.current.checkValidity()){
			dobVector.style.display="inline-flex";
		}else{
			dobVector.style.display="none";
		}
	}

	function checkForm(){

		if(nameRef.current.checkValidity() && emailRef.current.checkValidity() && numberRef.current.checkValidity() && dobRef.current.checkValidity()) {

			navigate("/experience-form");
		}
	}

	

	return (
		<div onChange={()=>{
			storeInfo()}}className="pinfo-form">
			<div className="name-div">
				<input value={name}onChange={(e)=>{setName(e.target.value)}}type="text" id="name" name="name" ref={nameRef} placeholder="Name " minLength="2" pattern="[a-zA-Z ]+" required autoComplete="off"></input>
				<img className="input-done done-name"src="src/assets/input-done.png"></img>

			</div>
			<div className="email-div">
				<input value={email} ref={emailRef}onChange={(e)=>{setEmail(e.target.value)}} type="email" id="email" name="email" placeholder="Email address " pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required autoComplete="off" ></input>
				<img className="input-done done-email"src="src/assets/input-done.png"></img>
			</div>
			<div className="phone-div">
				<input value={number} ref={numberRef} onChange={(e)=>{setNumber(e.target.value)}}type="tel" id="number" name="number" placeholder="Phone number" required pattern='[5]{1}[0-9]{8}'></input>
				<img className="input-done done-number"src="src/assets/input-done.png"></img>
			</div>
			<div className="date-div">
				<input value={dob} ref={dobRef} onChange={(e)=>{setDob(e.target.value)}}type="text" id="date" name="date" pattern='[0-9/]{3}[0-9/]{3}[0-9]{4}'minLength="6" required placeholder="Date of birth "></input>
				<img className="input-done done-dob"src="src/assets/input-done.png"></img>
			</div>
			<div className="pinfo-buttons">
				<Link to="/"><button className="btn-back">Back</button></Link>
				<button onClick={()=> {checkForm()}} className="btn-next">Next &nbsp; <img src="src/assets/btn-vector.png"></img> </button>
			</div>
			
		</div>
	)
}

export default PinfoForm;