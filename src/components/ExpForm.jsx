import React, {useState, useRef, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormHeader from './FormHeader';
import SelectVector from '/assets/select-vector.png';
import DoneVector from '/assets/done-vector.png';
import NextVector from '/assets/btn-vector.png';


function ExpForm(){

	const [showLevelBox, setShowLevelBox] = useState(false);
	const [showCharacterBox, setShowCharacterBox] = useState(false);
	const [levelValue, setLevelValue] = useState("");
	const [characterValue, setCharacterValue] = useState("");
	const [characters, setCharacters] = useState([]);

	const vectorRef = useRef();
	const characterVectorRef = useRef();
	const levelRef = useRef();
	const levelphRef = useRef();
	const expRectRef = useRef();
	const characterphRef = useRef();
	const characterRef = useRef();
	const questionRef = useRef();
	const noRef = useRef();
	const yesRef = useRef();

	useEffect( () => {
		fetchCharacters();
	}, []);

	useEffect( () => {
		showLevelValue();
		showCharacterValue();
		showAnswer();
	});


	function fetchCharacters() {
		fetch('https://chess-tournament-api.devtest.ge/api/grandmasters').then(res => res.json()).then(result => {setCharacters(result)});
	}

	function showLevelValue(){
		if(localStorage.getItem("level") !== null){
			setLevelValue(localStorage.getItem("level"));
			levelphRef.current.textContent=localStorage.getItem("level");
		}
	}

	function showCharacterValue(){
		if(localStorage.getItem("character") !== null){
			setCharacterValue(localStorage.getItem("character"));
			characterphRef.current.textContent=localStorage.getItem("character");
		}
	}

	function handleListClick(e){
		setShowLevelBox(false); 
		vectorRef.current.classList.remove("rotate"); 
		questionRef.current.classList.remove("no-overlay")
	}

	function handleCharacterClick(e){
		setShowCharacterBox(false); 
		characterVectorRef.current.classList.remove("rotate"); 
		questionRef.current.classList.remove("no-overlay")
		localStorage.setItem("character", e.currentTarget.textContent);
		localStorage.setItem("character-id", e.currentTarget.id);
	}

	function handleSelection(e){
		localStorage.setItem("level", e.currentTarget.textContent);
	}

	function checkQuestion(e){
		if(e.currentTarget.value == 'yes'){
			localStorage.setItem("answer", 'true');
		}else{
			localStorage.setItem("answer", 'false');
		}
	}

	function showAnswer(){
		if(localStorage.getItem("answer") == 'true'){
			yesRef.current.checked=true;
		}else{
			noRef.current.checked=true;
		}
	}

	function LevelBox(){
		return (
			<div onClick={(e)=> handleListClick(e)} className="select-list">
				<p className={levelValue == 'Beginner' ? 'selected' : ''} onClick={(e)=> handleSelection(e)}>Beginner</p>
				<p className={levelValue == 'Intermediate' ? 'selected' : ''}onClick={(e)=> handleSelection(e)}>Intermediate</p>
				<p className={levelValue == 'Professional' ? 'selected' : ''}onClick={(e)=> handleSelection(e)}>Professional</p>
			</div>
		)
	}

	function CharacterBox(){
		return (
			<div className="character-select-list">
				<div className="character-selection">
					<span className="character-total">(Total {characters.length})</span>
					{characters.map((content, index) => {
		                return (
						<div onClick={(e) => {handleCharacterClick(e)}}key={index} id={index} className="character-div">
							<p> {content.name}</p>
							<img className="character-img" src={`https://chess-tournament-api.devtest.ge/${content.image}`}></img>
						</div>
					)})}
				</div>
			</div>
		)
	}

	function Question(){
		return (
			<div className="question">
				<p className="question-p"> Have you participated in the Redberry Championship? <span className="input-warn">*</span></p>
				<input ref={yesRef} onClick={(e) => checkQuestion(e)} value="yes" required type="radio" name="question" id="question-yes"></input>
				<label htmlFor="question-yes">Yes</label>
				<input ref={noRef} onClick={(e) => checkQuestion(e)} value="no" required type="radio" name="question" id="question-no"></input>
				<label htmlFor="question-no">No</label>
			</div>
		)
	}

	function Wizard(){
		return (
			<div className="wizard-div">
				<div className="wizard-pinfo-div">
	    			<div className={localStorage.getItem("pinfo-started") == 'true' ? "pinfo-rect done" : "pinfo-rect not-current"}>{localStorage.getItem("pinfo-done") == 'true' ? <img className="done-vector" src={DoneVector}></img> : '1'}</div>
	        		<span className="wizard-pinfo">Personal information</span>

	    		</div>
	    		<div className="wizard-hr"></div>
	    		<div className="wizard-exp-div">
	        		<div ref={expRectRef}className='exp-rect'><strong>2</strong></div>
	        		<span className="wizard-exp">Chess experience</span>
	    		</div>
			</div>
		)
	}

	return (
		<div>
			<Wizard />

			<div className="info-form-div">
				<FormHeader header={'Chess experience'} />
				<div className="exp-info-form">
					<div className="exp-info-list">
						<span ref={levelphRef}className="exp-placeholder">Level of knowledge <span className="input-warn">*</span></span>
						<input ref={levelRef} disabled className="exp-level-input"></input>
						<img className="select-vector" ref={vectorRef} onClick={(e)=> {setShowLevelBox(!showLevelBox); e.currentTarget.classList.toggle("rotate"); questionRef.current.classList.toggle("no-overlay")}} src={SelectVector}></img>
						{showLevelBox && <LevelBox />}
					</div>

					<div className="character-info-list">
						<span ref={characterphRef}className="character-placeholder">Choose your character <span className="input-warn">*</span></span>
						<input ref={characterRef} disabled className="character-input"></input>
						<img className="select-vector" ref={characterVectorRef} onClick={(e)=> {setShowCharacterBox(!showCharacterBox); e.currentTarget.classList.toggle("rotate"); questionRef.current.classList.toggle("no-overlay")}} src={SelectVector}></img>
						{showCharacterBox && <CharacterBox />}
						</div>
						<div ref={questionRef}className="question-div">
							<Question />
						</div>
				</div>
					<div className="pinfo-buttons exp-buttons">
						<Link to="/personal-information"><button className="btn-back exp-back">Back</button></Link>
						<button className="btn-next btn-done">Done</button>
					</div>
			</div>
		</div>
	)
}

export default ExpForm;