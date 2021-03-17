import React, { useState } from 'react'
import { connect } from 'react-redux'
import { deletePost, editPost } from '../actions/postActions'

const PostEditor = ({ id, title, imageURL, description, display, dispatchEditPost, dispatchDeletePost }) => {
	const [inputTitle, setInputTitle] = useState(title);
	const [inputImageURL, setInputImageURL] = useState(imageURL);
	const [inputDescription, setInputDescription] = useState(description);

	const savePost = () => {
		dispatchEditPost(id, inputTitle, inputImageURL, inputDescription)
		display(false)
	}

	const deletePost = () => {
		console.log(id)
		dispatchDeletePost(id)
	}

	return (
		<div className='post-editor'>
			<div className='input-title-post-container'>
				<label htmlFor="input-title-post">Title</label>
				<input type="text" id="input-title-post" name="input-title-post" onChange={e =>  setInputTitle(e.target.value)} value={inputTitle} />
			</div>
			<div className='input-image-post-container'>
				<label htmlFor="input-image-post">Image URL</label>
				<input type="text" id="input-image-post" name="input-image-post" onChange={e => setInputImageURL(e.target.value)} value={inputImageURL}/>
			</div>
			<div className='input-description-post-container'>
				<label htmlFor="input-description-post">Description</label>
				<input type="text" id="input-description-post" name="input-description-post" onChange={e => setInputDescription(e.target.value)} value={inputDescription} />
			</div>
			<button className='input-save-post' onClick={() => savePost() }>Save</button>
			<button className='input-cancel-post' onClick={() => display(false)}>Cancel</button>
			<button className='input-delete-post' onClick={() => deletePost()}>Delete</button>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	dispatchEditPost: (id, title, imageURL, description) => dispatch(editPost(id, title, imageURL, description)),
	dispatchDeletePost: (id) => dispatch(deletePost(id))
})

export default connect(null, mapDispatchToProps)(PostEditor);