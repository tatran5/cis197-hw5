import React, { useState } from 'react'
import { connect } from 'react-redux'

const Post = ({ id, title, imageURL, description, displayHidden }) => {
	return (
		<div className='post-content'>
			<img className='post-image' src = {imageURL} />
			<div className='post-title' id={id}>POST#{id}: {title}</div>
			<div className='post-description'> {description} </div>
			<button className='post-edit' onClick={() => displayHidden(true)}>Edit</button>
		</div> 
	)
}

export default connect(null, null)(Post);