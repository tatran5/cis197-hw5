import React, { useState } from 'react'
import { connect } from 'react-redux'
import Intro from './Intro'
import IntroEditor from './IntroEditor'
import '../styles/Intro.css'

const IntroContainer = () => {
	const [editing, setEditing] = useState(false);

	return (
		<>
			<div className='section-title'> About Me</div>
			<div className='IntroContainer'>
				{editing? <></>: <Intro displayHidden={setEditing}/>}
				{editing? <IntroEditor display={setEditing} /> : <></>}
			</div>
		</>
	)
}


export default IntroContainer;