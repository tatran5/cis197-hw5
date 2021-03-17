import React, { useState } from 'react'
import { connect } from 'react-redux'
import Intro from './Intro'
import IntroEditor from './IntroEditor'

const IntroContainer = () => {
	const [editing, setEditing] = useState(false);

	return (
		<div>
			{editing? <></>: <Intro />}
			{editing? <IntroEditor /> : <></>}
		</div>
	)
}


export default IntroContainer;