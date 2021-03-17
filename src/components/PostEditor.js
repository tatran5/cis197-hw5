import React, { useState } from 'react'
import { connect } from 'react-redux'

const PostEditor = ({id, title, imageURL, description, display}) => {

	
	return (
		<div className='post-editor'>
			<div className='input-title-post-container'>
				<label htmlFor="input-title-post">Title</label>
				<input type="text" id="input-title-post" name="input-title-post" onChange={e =>  console.log('TODO3')} />
			</div>
			<div className='input-image-post-container'>
				<label htmlFor="input-image-post">Image URL</label>
				<input type="text" id="input-image-post" name="input-image-post" onChange={e => console.log('TODO1')} />
			</div>
			<div className='input-description-post-container'>
				<label htmlFor="input-description-post">Description</label>
				<input type="text" id="input-description-post" name="input-description-post" onChange={e =>  console.log('TODO2')} />
			</div>
			<button className='input-save-post' onClick={() => console.log('TODO4')}>Save</button>
			<button className='input-cancel-post' onClick={() => display(false)}>Cancel</button>
		</div>
	)
}

export default connect(null, null)(PostEditor);