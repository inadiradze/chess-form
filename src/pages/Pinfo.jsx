import React from 'react';
import Header from '../components/Header';
import PinfoForm from '../components/PinfoForm';
import InfoLeft from '../components/InfoLeft';

function Pinfo(){
	return (
		<div className="pinfo-div">
			<div>
				<InfoLeft />
			</div>
			<div>
				<PinfoForm />
			</div>
	       
        </div>
	)
}

export default Pinfo;