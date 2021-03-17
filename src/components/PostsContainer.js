import React, { useState } from 'react'
import { connect } from 'react-redux'
import PostContainer from './PostContainer'
import PostAdd from './PostAdd'

const PostsContainer = ({ posts }) => {
	const [addingPost, setAddingPost] = useState(false);

	return (
		<div>
			<h1>Posts</h1>
			{addingPost ? <></> : <button onClick={() => setAddingPost(true) }>Add post</button>}
			{addingPost ? <PostAdd display={setAddingPost} /> : <></>}
			{posts.map(post => <PostContainer
				key={post.id}
				id={post.id} 
				title={post.title} 
				imageURL={post.imageURL} 
				description={post.description}
				/>)}
		</div>
	)
}

const mapStateToProps = state => ({
	posts: state.posts
})


export default connect(mapStateToProps, null)(PostsContainer);