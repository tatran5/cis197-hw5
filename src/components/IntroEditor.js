import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getIntro } from '../actions/introActions'

const IntroEditor = () => {
	const [inputImageURL, getInputImageURL] = useState('');
	const [inputDescription, getInputDescription] = useState('');

	return (
		<div>
			<img className='intro-input-image' src = {undefined} />
			<div className='intro-input-description'>{undefined}</div>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	dispatchGetIntro: () => dispatch(getIntro())
})

export default connect(null, mapDispatchToProps)(IntroEditor)