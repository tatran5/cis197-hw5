import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions/postActions'

const PostAdd = ({display, dispatchAddPost}) => {
	const [inputTitle, setInputTitle] = useState('');
	const [inputImageURL, setInputImageURL] = useState('');
	const [inputDescription, setInputDescription] = useState('');

	const addPost = () => {
		dispatchAddPost(inputTitle, inputImageURL, inputDescription);
		display(false);
	}

	return (
		<div className='PostAdd'>
			<div className='input-container'>
				<label htmlFor="input-title-post">Title</label>
				<input type="text" id="input-title-post" name="input-title-post" onChange={e =>  setInputTitle(e.target.value)} />
			</div>
			<div className='input-container'>
				<label htmlFor="input-image-post">Image URL</label>
				<input type="text" id="input-image-post" name="input-image-post" onChange={e => setInputImageURL(e.target.value)} />
			</div>
			<div className='input-container'>
				<label htmlFor="input-description-post">Description</label>
				<input type="text" id="input-description-post" name="input-description-post" onChange={e => setInputDescription(e.target.value)} />
			</div>
			<div className='buttons'>
				<div className='button save' onClick={() => addPost() }>Save</div>
				<div className='button cancel' onClick={() => display(false)}>Cancel</div>
			</div>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	dispatchAddPost: (title, imageURL, description) => dispatch(addPost(title, imageURL, description))
})

export default connect(null, mapDispatchToProps)(PostAdd);