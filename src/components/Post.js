import React, { useState } from 'react'
import { connect } from 'react-redux'

const Post = ({ id, title, imageURL, description, displayHidden }) => {
	return (
		<div className='Post'>
			<div className='post-image' style={{ backgroundImage: `url(${imageURL})`}} />
			<div className='post-title' id={id}>POST#{id}: {title}</div>
			<div className='post-description'> {description} </div>
			<div className='button edit' onClick={() => displayHidden(true)}>Edit</div>
		</div> 
	)
}

export default connect(null, null)(Post);