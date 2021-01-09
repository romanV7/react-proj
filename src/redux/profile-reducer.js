const ATTR = {
    ADD_POST: 'ADD_POST',
    UPDATE_NEW_POST_TEXT: 'UPDATE_NEW_POST_TEXT',
}

const initialState = {
    posts: [
        {id: 1, message: 'Hi!', likesCount: 23},
        {id: 2, message: 'It"s me', likesCount: 33}
    ],
    newPostText: 'newPostText'
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ATTR.ADD_POST:
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 2
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        case ATTR.UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ATTR.ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
    type: ATTR.UPDATE_NEW_POST_TEXT, newText: text    
})

export default profileReducer