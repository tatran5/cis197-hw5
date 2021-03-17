const defaultState = {
	imageURL: `https://www.indiewire.com/wp-content/uploads/2017/08/1351058-1419981-zoomed.png`,
	description: `Back in the 90's I was in a very famous TV show`
}
const intro = (state = defaultState, action) => {
	switch (action.type) {
		case 'GET_INTRO':
			return state;
		case 'EDIT_INTRO':
			const { imageURL, description } = action; 
			return { imageURL, description }
		default:
			return state;
	}
}

export default intro