import React, {useState, useRef, useEffect} from 'react';
import Header from './Header';

function InfoLeft(classname, quote, author){

	return (
        <div className={`${classname.classname}-left`}>
      		<Header />
      		<div className={`${classname.classname}-intro`}>
          		<p> {classname.quote} </p>
          		
          		<p className={`${classname.classname}-intro-author`}> -{classname.author} </p>
      		</div>
        </div>
    )
}

export default InfoLeft;