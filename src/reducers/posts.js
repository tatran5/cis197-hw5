const defaultState = [
	{
		id : 0,
		title: 'sleepy',
		image: 'https://avatarfiles.alphacoders.com/263/thumb-263062.png',
		description: 'help please'
	}
]

const posts = (state = defaultState, action) => {
	const { type, id, title, image, description } = action;
	switch (type) {
		case 'ADD_POST':
			return [
				...state, { id, title, image, description }
			];
		case 'DELETE_POST':
			return state.map(post =>  {if (post.id !== id) return post;});
		case 'EDIT_POST':
			return state.map(post => {
        if (post.id === id) {
          return { id, title, image, description }
        }
				return post;
      })
		default:
			return state;
	}
}

export default posts;