const defaultState = {
	imageURL: `https://cdn.vox-cdn.com/thumbor/acn718zQDcATQbUeT8_ipESL-h4=/250x250/cdn.vox-cdn.com/uploads/chorus_asset/file/19658559/the_child_star_wars_gallery_5e3204be02fcb.jpg`,
	description: `I am Grogu (default)`
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