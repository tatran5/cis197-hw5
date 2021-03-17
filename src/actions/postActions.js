let postCounter = 0;

export const getNewPostId = () => ({
	type: 'GET_NEW_ID',
	id: postCounter + 1,
})

export const addPost = (title, imageURL, description) => ({
	type: 'ADD_POST',
	id: postCounter++,
	title: title,
	imageURL: imageURL,
	description: description
})

export const deletePost = (id) => ({
	type: 'DELETE_POST',
	id: id
});

export const editPost = (id, title, imageURL, description) => ({
	type: 'EDIT_POST',
	id: id,
	title: title,
	imageURL: imageURL,
	description: description
});