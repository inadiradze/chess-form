import React, {useEffect, useState, useContext} from 'react';
import Header from '../components/Header';
import OnboardingDone from '/assets/onboarding-done.png';
import ErrorPage from './ErrorPage';
import {Context} from '../App';

function Onboarding(){

	const {expDone, setExpDone} = useContext(Context);
	const {pinfoDone, setPinfoDone} = useContext(Context);
	const [error, setError] = useState(false);

	useEffect( ()=> {
		if(pinfoDone && expDone){
			sendForm();
		}
	}, []);

	function sendForm(){

		let answer;
		let level;

		localStorage.getItem("answer") == 'true' ? answer = true : answer = false;

		localStorage.getItem("level") == 'Intermediate' ? level = 'normal' : level = localStorage.getItem("level").toLowerCase();

		fetch("https://chess-tournament-api.devtest.ge/api/register", {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify({
				  "name": localStorage.getItem("name"),
				  "email": localStorage.getItem("email"),
				  "phone": localStorage.getItem("number"),
				  "date_of_birth": localStorage.getItem("dob"),
				  "experience_level": level,
				  "already_participated": answer,
				  "character_id": parseInt(localStorage.getItem("character-id"))
				})
			}).then(resp => {console.log(resp.status); if(resp.status !== 201){setError(true)}else{localStorage.clear()}}).catch(err=>console.log(err))
	}


	return(
		<div>
			{pinfoDone && expDone ? (
			<div className="onboarding-div">

				<div className="onboarding-left">
					<Header/>
				</div>

				<div className="onboarding-right">
					{error ?
						<div className="onboarding-error-div"><p> Something went wrong :( </p></div> :
					<div className="onboarding-img-div">
						<img src={OnboardingDone} alt="Onboarding Done"></img>
					</div>}
				</div>
		       
	        </div>) : <ErrorPage />}
        </div>
	)
}

export default Onboarding;