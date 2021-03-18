import React, { useState } from 'react'
import { connect } from 'react-redux'
import PostContainer from './PostContainer'
import PostAdd from './PostAdd'
import '../styles/Post.css'

const PostsContainer = ({ posts }) => {
	const [addingPost, setAddingPost] = useState(false);

	return (
		<>
			<div className='section-title'>Posts</div>
			{addingPost ? <></> : <div className='button add' onClick={() => setAddingPost(true) }>Add post</div>}
			{addingPost ? <PostAdd display={setAddingPost} /> : <></>}
			<div className='PostsContainer'>
				{posts.map(post => <PostContainer
					key={post.id}
					id={post.id} 
					title={post.title} 
					imageURL={post.imageURL} 
					description={post.description}
					/>)}
			</div>
		</>
	)
}

const mapStateToProps = state => ({
	posts: state.posts
})


export default connect(mapStateToProps, null)(PostsContainer);