import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getIntro } from '../actions/introActions'

const Intro = ({ imageURL, description }) => {
	return (
		<div>
			<img className='intro-image' src = {imageURL} />
			<div className='intro-description'>{description}</div>
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