import React from 'react';
import InfoLeft from '../components/InfoLeft';
import InfoHeader from '../components/InfoHeader';
import ExpForm from '../components/ExpForm';

function ExpInfo(){

	document.title = "Redberry Chess | Experience Information";

	const quote =  <> “Many have become chess masters; <br></br> no one has become the master of chess.” </>;

	function Wizard(){
		return (
			<div className="wizard-div">
				<div className="wizard-pinfo-div">
	    			<div className="pinfo-rect current"><img className="done-vector" src="src/assets/done-vector.png"></img></div>
	        		<span className="wizard-pinfo">Personal information</span>

	    		</div>
	    		<div className="wizard-hr"></div>
	    		<div className="wizard-exp-div">
	        		<div className='exp-rect'>2</div>
	        		<span className="wizard-exp">Chess experience</span>
	    		</div>
			</div>
		)
	}

	return (
		<div className="expinfo-div">

			<div>
				<InfoLeft classname={'expinfo'} quote={quote} author={'Siegbert Tarrasch'} />
			</div>

			<div className="expinfo-right">

				<InfoHeader header={'First step is done, continue to finish onboarding'} />
				<Wizard />
				<ExpForm />
			</div>
	       
        </div>
	)
}

export default ExpInfo;