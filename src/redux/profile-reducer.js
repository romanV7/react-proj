const ATTR = {
    ADD_POST: 'ADD_POST',
    UPDATE_NEW_POST_TEXT: 'UPDATE_NEW_POST_TEXT',
}

const addPost = (state) => {
    const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 2
    }
    state.posts.push(newPost)
    state.newPostText = ''
    return state
}

const updateNewPostText = (state, newText) => {
    state.newPostText = newText
    return state
}

const profileReducer = (state, action) => {
    switch(action.type) {
        case ATTR.ADD_POST:
            addPost(state)
        case ATTR.UPDATE_NEW_POST_TEXT:
            updateNewPostText(state, action.newText)
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ATTR.ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
    type: ATTR.UPDATE_NEW_POST_TEXT, newText: text    
})

export default profileReducer