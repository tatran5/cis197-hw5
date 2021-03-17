import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getIntro } from '../actions/introActions'

const Intro = ({ imageURL, description, displayHidden }) => {
	return (
		<div>
			<img className='intro-image' src = {imageURL} />
			<div className='intro-description'>{description}</div>
			<button onClick={()=>displayHidden(true)}>Edit</button>
		</div>
	)
}

const mapStateToProps = state => ({
  imageURL: state.intro.imageURL,
	description: state.intro.description
})

const mapDispatchToProps = dispatch => ({
	dispatchGetIntro: () => dispatch(getIntro())
})

export default connect(mapStateToProps, mapDispatchToProps)(Intro)