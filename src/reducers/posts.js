const defaultState = [
	{
		id : 0,
		title: 'sleepy',
		imageURL: 'https://avatarfiles.alphacoders.com/263/thumb-263062.png',
		description: 'help please'
	}
]

const posts = (state = defaultState, action) => {
	const { type, id, title, imageURL, description } = action;
	switch (type) {
		case 'ADD_POST':
			return [
				...state, { id, title, imageURL, description }
			];
		case 'DELETE_POST':
			return state.map(post =>  {if (post.id !== id) return post;});
		case 'EDIT_POST':
			return state.map(post => {
        if (post.id === id) {
          return { id, title, imageURL, description }
        }
				return post;
      })
		default:
			return state;
	}
}

export default posts;