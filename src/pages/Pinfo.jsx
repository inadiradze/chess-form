import React from 'react';
import Header from '../components/Header';
import PinfoForm from '../components/PinfoForm';
import InfoLeft from '../components/InfoLeft';
import InfoHeader from '../components/InfoHeader';

function Pinfo(){

	document.title = "Redberry Chess | Personal Information";

	const quote =  <> “When you see a good move, <br></br> looks for a better one.” </>;

	return (
		<div className="pinfo-div">
			<div>
				<InfoLeft classname={'pinfo'} quote={quote} author={'emanuel lasker'} />
			</div>

			<div className="pinfo-right">
				<InfoHeader header={'Start creating your account'}/>
				<PinfoForm />
			</div>
	       
        </div>
	)
}

export default Pinfo;