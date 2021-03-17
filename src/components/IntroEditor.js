import React, { useState } from 'react'
import { connect } from 'react-redux'
import { editIntro } from '../actions/introActions'

const IntroEditor = ({ display, dispatchEditIntro }) => {
	const [inputImageURL, setInputImageURL] = useState('');
	const [inputDescription, setInputDescription] = useState('');

	const updateIntro = () => {
		dispatchEditIntro(inputImageURL, inputDescription);
		display(false);
	}

	return (
		<div className='intro-editor'>
			<div className='input-image-container'>
				<label htmlFor="input-image-url">Image URL</label>
				<input type="text" id="input-image-url" name="input-image-url" onChange={e => setInputImageURL(e.target.value)} />
			</div>
			<div className='input-description-container'>
				<label htmlFor="input-description">Description</label>
				<input type="text" id="input-description" name="input-description" onChange={e => setInputDescription(e.target.value)} />			
			</div>
			<button onClick={() => updateIntro()}>Save</button>
			<button onClick={() => display(false)}>Cancel</button>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	dispatchEditIntro: (imageURL, description) => dispatch(editIntro(imageURL, description))
})

export default connect(null, mapDispatchToProps)(IntroEditor)