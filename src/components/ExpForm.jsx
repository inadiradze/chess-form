import React, {useState, useRef} from 'react';
import FormHeader from './FormHeader';
import SelectVector from '/assets/select-vector.png';

function ExpForm(){

	const [showLevelBox, setShowLevelBox] = useState(false);
	const vectorRef = useRef();

	function LevelBox(){
		return (
			<div className="select-list"><p className="selected">Beginner</p><p>Intermediate</p><p>Professional</p>
			</div>
		)
	}


	return (
		<div className="info-form-div">
			<FormHeader header={'Chess experience'} />
			<div className="exp-info-form">
				<div className="exp-info-list">
					<span className="exp-placeholder">level of knowledge <span className="input-warn">*</span></span>
					<input disabled className="exp-level-input"></input>
					<img className="select-vector" onClick={(e)=> {setShowLevelBox(!showLevelBox); e.currentTarget.classList.toggle("rotate")}} src={SelectVector}></img>
					{showLevelBox && <LevelBox />}
				</div>
			</div>
		</div>
	)
}

export default ExpForm;