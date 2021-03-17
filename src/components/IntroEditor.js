import React, { useState } from 'react'
import { connect } from 'react-redux'
import { editIntro } from '../actions/introActions'

const IntroEditor = ({ imageURL, description, display, dispatchEditIntro }) => {
	const [inputImageURL, setInputImageURL] = useState(imageURL);
	const [inputDescription, setInputDescription] = useState(description);

	const updateIntro = () => {
		dispatchEditIntro(inputImageURL, inputDescription);
		display(false);
	}

	return (
		<div className='IntroEditor'>
			<div className='input-image-container'>
				<label htmlFor="input-image-url">Image URL</label>
				<input type="text" id="input-image-url" name="input-image-url" onChange={e => setInputImageURL(e.target.value)} value={inputImageURL}/>
			</div>
			<div className='input-description-container'>
				<label htmlFor="input-description">Description</label>
				<input type="text" id="input-description" name="input-description" onChange={e => setInputDescription(e.target.value)} value={inputDescription} />			
			</div>
			<div className='buttons'>
				<div className='button save' onClick={() => updateIntro()}>Save</div>
				<div className='button cancel' onClick={() => display(false)}>Cancel</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
  imageURL: state.intro.imageURL,
	description: state.intro.description
})


const mapDispatchToProps = dispatch => ({
	dispatchEditIntro: (imageURL, description) => dispatch(editIntro(imageURL, description))
})

export default connect(mapStateToProps, mapDispatchToProps)(IntroEditor)