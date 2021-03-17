import React from 'react'
import { connect } from 'react-redux'

const Intro = ({ imageURL, description, displayHidden }) => {
	return (
		<div className='Intro'>
			<img className='intro-image' src = {imageURL} /> <br/>
			<div className='intro-description'>{description}</div> <br/>
			<div className='button edit' onClick={()=>displayHidden(true)}>Edit</div>
		</div>
	)
}

const mapStateToProps = state => ({
  imageURL: state.intro.imageURL,
	description: state.intro.description
})

export default connect(mapStateToProps, null)(Intro)