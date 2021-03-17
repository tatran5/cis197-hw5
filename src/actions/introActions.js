export const editIntro = (imageURL, description) => ({
	type: 'EDIT_INTRO',
	imageURL: imageURL,
	description: description
})

export const getIntro = () => ({
	type: 'GET_INTRO',
})