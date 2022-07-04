import React from 'react';
import InfoLeft from '../components/InfoLeft';
import Wizard from '../components/Wizard';
import InfoHeader from '../components/InfoHeader';
import FormHeader from '../components/FormHeader';
import ExpForm from '../components/ExpForm';

function ExpInfo(){

	document.title = "Redberry Chess | Experience Information";

	const quote =  <> “Many have become chess masters; <br></br> no one has become the master of chess.” </>;

	return (
		<div className="expinfo-div">

			<div>
				<InfoLeft classname={'expinfo'} quote={quote} author={'Siegbert Tarrasch'} />
			</div>

			<div className="expinfo-right">
				<InfoHeader header={'First step is done, continue to finish onboarding'} />
				<Wizard current={'current'}/>
				<ExpForm />
			</div>
	       
        </div>
	)
}

export default ExpInfo;