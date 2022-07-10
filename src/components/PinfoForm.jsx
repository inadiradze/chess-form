import React, { useEffect, useState, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CheckMark from './CheckMark';
import ErrorPopup from './ErrorPopup';
import FormHeader from './FormHeader';
import DoneVector from '/assets/done-vector.png';
import NextVector from '/assets/btn-vector.png';
import {Context} from '../App';

function PinfoForm(){

	const navigate = useNavigate();
	const [started, setStarted] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");
	const [dob, setDob] = useState("");

	const [emailValid, setEmailValid] = useState();
	const [nameValid, setNameValid] = useState();
	const [dobValid, setDobValid] = useState();
	const [numberValid, setNumberValid] = useState();
	const [allValid, setAllValid] = useState();
	const [submitted, setSubmitted] = useState();

	const {error, setError} = useContext(Context);
	const {pinfoDone, setPinfoDone} = useContext(Context);

	const pinfoRect = useRef();
	const nameRef = useRef();
	const emailRef = useRef();
	const numberRef = useRef();
	const dobRef = useRef();

	useEffect( () => {
		if(localStorage.getItem("pinfo-started") == 'true'){
			setTimeout(()=>{
				checkInputs();
			}, 100)
		}
		showSavedInfo();
	}, []);

	useEffect( ()=> {
		checkAllInputs();
		checkIfStarted();
	});

	useEffect( ()=> {
		if(started){
			pinfoRect.current.classList.add('current');
		}else{
			pinfoRect.current.classList.remove('current');
		}
	}, [started])


	function showSavedInfo(){
		localStorage.getItem("name") !== null && setName(localStorage.getItem("name"));

		localStorage.getItem("email") !== null && setEmail(localStorage.getItem("email"));

		localStorage.getItem("number") !== null && setNumber(localStorage.getItem("number"));

		localStorage.getItem("dob") !== null && setDob(localStorage.getItem("dob"));

	}

	function checkInputs(){

		if(dobRef.current.checkValidity()){
			setDobValid(true);
		}else{
			setDobValid(false);
			setError({
				input: 'date of birth',
				error: 'Please enter a valid date of birth'
			});

		}

		if(numberRef.current.checkValidity()){
			setNumberValid(true);
		}else{
			setError({
				input: 'phone number',
				error: 'Number must be Georgian and contain 9 characters'
			});
			setNumberValid(false);
		}

		if(emailRef.current.checkValidity()){
			setEmailValid(true);
		}else{
			setEmailValid(false);
			setError({
				input: 'email',
				error: 'Email address must end only with @redberry.ge'
			});
		}

		if(nameRef.current.checkValidity()){
			setNameValid(true);

		}else{
			setNameValid(false);
			setError({
				input: 'name',
				error: 'Name must contain at least two letters'
			})
		}

	}

	function checkAllInputs(){
		const inputFields = document.querySelectorAll("input");

		const validInputs = Array.from(inputFields).filter( input => input.checkValidity());

		if(validInputs.length == inputFields.length){
			setAllValid(true);
			localStorage.setItem("pinfo-done", true);
		}else{
			setAllValid(false);
			localStorage.removeItem("pinfo-done");
		}
	}

	function checkIfStarted(){
		const inputFields = document.querySelectorAll("input");
		const startedInputs = Array.from(inputFields).filter( input => input.defaultValue);

		if(startedInputs.length > 0){
			setStarted(true);
			localStorage.setItem("pinfo-started", true);
		}else{
			setStarted(false);
			localStorage.removeItem("pinfo-started");
		}
	}


	function storeInfo(){
		localStorage.setItem("name", nameRef.current.value);
		localStorage.setItem("email", emailRef.current.value);
		localStorage.setItem("number", numberRef.current.value);
		localStorage.setItem("dob", dobRef.current.value);
		
	}

	function checkForm(){

		checkInputs();

		if(nameRef.current.checkValidity() && emailRef.current.checkValidity() && numberRef.current.checkValidity() && dobRef.current.checkValidity()) {
				navigate("/experience-information");
				setPinfoDone(true);	
				setError();
		}
	}

	

	return (
		<div>
    		<div className="wizard-div">

    			<div className="wizard-pinfo-div">
        			<div ref={pinfoRect}className="pinfo-rect">{!allValid ? <strong>1</strong> : <img className="done-vector" src={DoneVector}></img>}</div>
	        		<span className="wizard-pinfo">Personal information</span>

        		</div>
        		<div className="wizard-hr"></div>
        		<div className="wizard-exp-div">
	        		<div className={localStorage.getItem("exp-started") == 'true' ? 'exp-rect done' : 'exp-rect not-current'}>{localStorage.getItem("exp-done") == 'true' ? <img className="done-vector" src={DoneVector}></img> : '2'}</div>
	        		<span className="wizard-exp">Chess experience</span>
        		</div>
    		</div>
			<div className="info-form-div">
				
				<div>
					<FormHeader header={"Personal information"} />
				</div>

				<div onChange={()=>{
					storeInfo()}} className="pinfo-form">

					{error && <ErrorPopup />}

					<div className={nameValid != false ? "name-div" : "name-div error-input"}>
						
						<input value={name} onChange={(e)=>{setName(e.target.value)}}type="text" id="name" name="name" ref={nameRef} placeholder='&nbsp;' minLength="2" pattern="[a-zA-Z ]{2,}" required autoComplete="off"></input>
						<span className="placeholder">Name <span className="input-warn">*</span></span>

						{nameValid && <CheckMark /> }
						

					</div>
					<div className={emailValid != false ? "email-div" : "email-div error-input"}>
						
						<input value={email} ref={emailRef} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='&nbsp;' id="email" name="email"pattern="[a-z0-9._%+-]+@redberry.ge" required autoComplete="off" ></input>
						<span className="placeholder">Email address <span className="input-warn">*</span></span>
						{emailValid && <CheckMark />}
					</div>
					<div className={numberValid != false ? "number-div" : "number-div error-input"}>
						
						<input placeholder='&nbsp;' value={number} ref={numberRef} onChange={(e)=>{setNumber(e.target.value)}}type="tel" id="number" name="number" required pattern='[5]{1}[0-9]{8}'></input>
						<span className="placeholder">Phone number <span className="input-warn">*</span></span>
						{numberValid && <CheckMark />}
					</div>
					<div className={dobValid != false ? "dob-div" : "dob-div error-input"}>
						
						<input placeholder='&nbsp;' value={dob} ref={dobRef} onChange={(e)=>{setDob(e.target.value)}}type={!dob ? "text" : "date"}   onFocus={ (e)=>  e.currentTarget.type= 'date'} min="1900-01-01" max={new Date().toISOString().split("T")[0]} id="date" name="date" pattern='[0-9/]{3}[0-9/]{3}[0-9]{4}'minLength="6" required></input>
						<span className="placeholder">Date of birth <span className="input-warn">*</span></span>
						{dobValid && <CheckMark />}
					</div>
					<div className="pinfo-buttons">
						<Link onClick={()=> setError()} to="/"><button className="btn-back">Back</button></Link>
						<button onClick={()=> {checkForm()}} className="btn-next">Next &nbsp; <img src={NextVector}></img> </button>
					</div>
					
				</div>
			</div>
		</div>
	)
}

export default PinfoForm;