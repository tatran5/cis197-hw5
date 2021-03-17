const defaultState = []

const posts = (state = defaultState, action) => {
	const { type, id, title, imageURL, description } = action;

	switch (type) {
		case 'ADD_POST':
			return [
				...state, { id, title, imageURL, description }
			];
		case 'DELETE_POST':
			return state.filter(post =>  post.id !== id);
		case 'EDIT_POST':
			return state.map(post => {
        if (post.id === id) {
          return { id, title, imageURL, description }
        }
				return post;
      })
		case 'GET_NEW_ID':
			return id; 
		default:
			return state;
	}
}

export default posts;