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
		<div className='post-add'>
			<div className='input-title-post-container'>
				<label htmlFor="input-title-post">Title</label>
				<input type="text" id="input-title-post" name="input-title-post" onChange={e =>  setInputTitle(e.target.value)} />
			</div>
			<div className='input-image-post-container'>
				<label htmlFor="input-image-post">Image URL</label>
				<input type="text" id="input-image-post" name="input-image-post" onChange={e => setInputImageURL(e.target.value)} />
			</div>
			<div className='input-description-post-container'>
				<label htmlFor="input-description-post">Description</label>
				<input type="text" id="input-description-post" name="input-description-post" onChange={e => setInputDescription(e.target.value)} />
			</div>
			<button className='input-save-post' onClick={() => addPost() }>Save</button>
			<button className='input-cancel-post' onClick={() => display(false)}>Cancel</button>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	dispatchAddPost: (title, imageURL, description) => dispatch(addPost(title, imageURL, description))
})

export default connect(null, mapDispatchToProps)(PostAdd);