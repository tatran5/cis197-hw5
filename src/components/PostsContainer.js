import React, { useState } from 'react'
import { connect } from 'react-redux'
import Post from './Post'

const PostsContainer = ({posts}) => {
	const [editing, setEditing] = useState(false);

	return (
		<div>
			<h1>Posts</h1>
			<button onClick={() => console.log('TODO: add post!')}>Add post</button>
			{posts.map(post => <Post 
				key={post.id}
				id={post.id} 
				title={post.title} 
				imageURL={post.imageURL} 
				description={post.description}
				displayHidden={setEditing}
				/>)}
		</div>
	)
}

const mapStateToProps = state => ({
	posts: state.posts
})


export default connect(mapStateToProps, null)(PostsContainer);