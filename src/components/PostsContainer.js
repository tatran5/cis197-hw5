import React, { useState } from 'react'
import { connect } from 'react-redux'
import PostContainer from './PostContainer'

const PostsContainer = ({posts}) => {

	return (
		<div>
			<h1>Posts</h1>
			<button onClick={() => console.log('TODO: add post!')}>Add post</button>
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