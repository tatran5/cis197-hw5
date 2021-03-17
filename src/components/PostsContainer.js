import React, { useState } from 'react'
import { connect } from 'react-redux'

const PostsContainer = ({posts}) => {
	console.log(posts)

	return (
		<div>
			<h1>Posts</h1>
			<button onClick={() => console.log('TODO: add post!')}>Add post</button>
			{posts.map(post => <></>)}
		</div>
	)
}

const mapStateToProps = state => ({
	posts: state.posts
})


export default connect(mapStateToProps, null)(PostsContainer);