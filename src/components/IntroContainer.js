import React, { useState } from 'react'
import { connect } from 'react-redux'
import Intro from './Intro'
import IntroEditor from './IntroEditor'

const IntroContainer = () => {
	const [editing, setEditing] = useState(false);

	return (
		<div>
			{editing? <></>: <Intro />}
			{editing? <IntroEditor display={setEditing} /> : <></>}
			<button onClick={() => setEditing(!editing)}>test</button>
		</div>
	)
}


export default IntroContainer;