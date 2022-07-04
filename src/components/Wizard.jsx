import React from 'react';

function Wizard(current){
	return (
		<div className="wizard-div">
			<div className="wizard-pinfo-div">
    			<div className="pinfo-rect current"><img className="done-vector" src="src/assets/done-vector.png"></img></div>
        		<span className="wizard-pinfo">Personal information</span>

    		</div>
    		<div className="wizard-hr"></div>
    		<div className="wizard-exp-div">
        		<div className={`exp-rect ${current.current}`}>2</div>
        		<span className="wizard-exp">Chess experience</span>
    		</div>
		</div>
	)
}

export default Wizard;