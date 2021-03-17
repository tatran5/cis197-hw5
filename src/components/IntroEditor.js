import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getIntro } from '../actions/introActions'

const IntroEditor = ({ display }) => {
	const [inputImageURL, setInputImageURL] = useState('');
	const [inputDescription, setInputDescription] = useState('');

	return (
		<div className='intro-editor'>
			<label htmlFor="input-image-url">Image URL</label>
			<input type="text" id="input-image-url" name="input-image-url" onChange={e => setInputImageURL(e.target.value)} />
			<label htmlFor="input-description">Description</label>
			<input type="text" id="input-description" name="input-description" onChange={e => setInputDescription(e.target.value)} />
			<br/>
			<button onClick={() => console.log('u')}>Save</button>
			<button onClick={() => display(false)}>Cancel</button>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	dispatchGetIntro: () => dispatch(getIntro())
})

export default connect(null, null)(IntroEditor)