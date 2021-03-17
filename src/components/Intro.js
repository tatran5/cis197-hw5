import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getIntro } from '../actions/introActions'

const Intro = ({ imageURL, description, displayHidden }) => {
	return (
		<div>
			<img className='intro-image' src = {imageURL} /> <br/>
			<div className='intro-description'>{description}</div> <br/>
			<button onClick={()=>displayHidden(true)}>Edit</button>
		</div>
	)
}

const mapStateToProps = state => ({
  imageURL: state.intro.imageURL,
	description: state.intro.description
})

export default connect(mapStateToProps, null)(Intro)