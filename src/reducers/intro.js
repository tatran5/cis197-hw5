const defaultState = []

const intro = (state = defaultState, action) => {
  const { type, imageURL, description } = action

  switch (type) {
		default:
			return state
    case 'EDIT_INTRO':
      return { imageURL, description};
  }
}

export default intro