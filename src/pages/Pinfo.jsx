import React from 'react';
import Header from '../components/Header';
import PinfoForm from '../components/PinfoForm';

function Pinfo(){
	return (
		<div className="pinfo-div">

	        <div className="pinfo-left">
          		<Header />
          		<div className="pinfo-intro">
	          		<p> “When you see a good move, <br></br> look for a better one.” </p>
	          		
	          		<p className="pinfo-intro-author"> -Emanuel Lasker </p>
          		</div>
	        </div>

	        <div className="pinfo-right">
	        	<header className="pinfo-right-header">
	        		<h1 className="pinfo-h"> Start Creating Your Account </h1>
        		</header>

        		<div className="wizard-div">

        			<div className="wizard-pinfo-div">
	        			<div className="pinfo-rect current">1</div>
		        		<span className="wizard-pinfo">Personal information</span>

	        		</div>
	        		<div className="wizard-hr"></div>
	        		<div className="wizard-exp-div">
		        		<div className="exp-rect not-current">2</div>
		        		<span className="wizard-exp">Chess experience</span>
	        		</div>
        		</div>

        		<div className="pinfo-form-header">
        			<header className="pinfo-form-h">
        				<h1> Personal information</h1>
        				<p> This Is Basic Information Fields </p>
    				</header>
    				
    				<div>
    					<PinfoForm />
					</div>

        		</div>
	        </div>
        </div>
	)
}

export default Pinfo;