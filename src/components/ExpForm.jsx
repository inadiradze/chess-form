import React, {useState, useRef, useEffect} from 'react';
import FormHeader from './FormHeader';
import SelectVector from '/assets/select-vector.png';
import DoneVector from '/assets/done-vector.png';


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

	useEffect( () => {
		fetchCharacters();
	}, []);

	useEffect( () => {
		showLevelValue();
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

	function handleListClick(e){
		setShowLevelBox(false); 
		vectorRef.current.classList.remove("rotate"); 
	}

	function handleSelection(e){
		localStorage.setItem("level", e.currentTarget.textContent);
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
			<div onClick={(e)=> handleCharacterClick(e)} className="character-select-list">
				<div className="character-selection">
					<span className="character-total">(Total {characters.length})</span>
					{characters.map((content, index) => {
		                return (
						<div key={index} className="character-div">
							<p key={content.id}> {content.name}</p>
							<img className="character-img" src={`https://chess-tournament-api.devtest.ge/${content.image}`}></img>
						</div>
					)})}
				</div>
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
						<input ref={levelRef} value={levelValue} disabled className="exp-level-input"></input>
						<img className="select-vector" ref={vectorRef} onClick={(e)=> {setShowLevelBox(!showLevelBox); e.currentTarget.classList.toggle("rotate")}} src={SelectVector}></img>
						{showLevelBox && <LevelBox />}
					</div>

					<div className="character-info-list">
						<span ref={characterphRef}className="character-placeholder">Choose your character <span className="input-warn">*</span></span>
						<input ref={characterRef} value={characterValue} disabled className="character-input"></input>
						<img className="select-vector" ref={characterVectorRef} onClick={(e)=> {setShowCharacterBox(!showCharacterBox); e.currentTarget.classList.toggle("rotate")}} src={SelectVector}></img>
						{showCharacterBox && <CharacterBox />}
						</div>
				</div>
			</div>
		</div>
	)
}

export default ExpForm;