import React, {useEffect} from 'react';
import Header from '../components/Header';
import OnboardingDone from '/assets/onboarding-done.png';

function Onboarding(){

	useEffect( ()=> {
		sendForm();
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
			}).then(resp => console.log(resp.status)).catch(err=>console.log(err))
	}


	return(
		<div className="onboarding-div">

			<div className="onboarding-left">
				<Header/>
			</div>

			<div className="onboarding-right">
				<div className="onboarding-img-div">
					<img src={OnboardingDone} alt="Onboarding Done"></img>
				</div>
			</div>
	       
        </div>
	)
}

export default Onboarding;