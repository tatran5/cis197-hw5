import React, { useState } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import PostEditor from './PostEditor';

const PostContainer = ({id, title, imageURL, description}) => {
	const [editing, setEditing] = useState(false);

	return (
		<div className='PostContainer' id={id}>
			{ editing? <></> : <Post id={id} title={title} imageURL={imageURL} description={description} displayHidden={setEditing}/>}
			{ editing? < PostEditor id={id} title={title} imageURL={imageURL} description={description} display={setEditing}/>: <></>}
		</div>
	)
}

export default connect(null, null)(PostContainer);