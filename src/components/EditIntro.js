import React, { useState } from 'react'
import { connect } from 'react-redux'
import { editIntro } from '../actions/introActions'

const EditIntro = ({ dispatchEditIntro }) => {
	const [imageURL, setImageURL] = useState('');
	const [description, setDescription] = useState('')

	console.log(`dispatchEditIntro: ${dispatchEditIntro}`);
	// TODO: button
	return (
		<div>
			<div>
				<label htmlFor="imageURL">Image</label>
				<input onChange={e => setImageURL(e.target.value) } id="imageURL" name="imageURL"/>		
			</div>
			<div>
				<label htmlFor="description">Description</label>	
				<input onChange={e => setDescription(e.target.value)} id="description" name="description"/>
			</div>
			<button onClick={() => {console.log(imageURL); dispatchEditIntro(imageURL, description);}}>Save</button>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
  dispatchEditIntro: text => dispatch(editIntro(text))
})


export default connect(null, mapDispatchToProps)(EditIntro)