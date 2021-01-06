const ATTR = {
    ADD_POST: 'ADD_POST',
    UPDATE_NEW_POST_TEXT: 'UPDATE_NEW_POST_TEXT',
    UPDATE_NEW_MESSAGE_BODY: 'UPDATE_NEW_MESSAGE_BODY',
    SEND_MESSAGE: 'SEND_MESSAGE'
}


const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi!', likesCount: 23},
                {id: 2, message: 'It"s me', likesCount: 33}
            ],
            newPostText: 'newPostText'
    
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How'},
                {id: 3, message: 'Are'},
                {id: 4, message: 'You'},
                {id: 5, message: '?'},
            ],
            dialogs: [
                {id: 1, name: 'Bob'},
                {id: 2, name: 'David'},
                {id: 3, name: 'Varela'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {},
    _addPost () {
        const newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 2
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    _updateNewMessageBody(body) {
        this._state.dialogsPage.newMessageBody = body
        this._callSubscriber(this._state)
    },
    _sendMessage() {
        const body = this._state.dialogsPage.newMessageBody
        this._state.dialogsPage.newMessageBody = ''
        this._state.dialogsPage.messages.push({id: 6, message: body})
        this._callSubscriber(this._state)
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        switch(action.type) {
            case ATTR.ADD_POST:
                return this._addPost()
            case ATTR.UPDATE_NEW_POST_TEXT:
                return this._updateNewPostText(action.newText)
            case ATTR.UPDATE_NEW_MESSAGE_BODY:
                return this._updateNewMessageBody(action.body)
            case ATTR.SEND_MESSAGE:
                return this._sendMessage()
            default:
                return false
        }
    },

    
}

export const addPostActionCreator = () => ({type: ATTR.ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
    type: ATTR.UPDATE_NEW_POST_TEXT, newText: text    
})

export const sendMessageCreator = () => ({type: ATTR.SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({
    type: ATTR.UPDATE_NEW_MESSAGE_BODY, body 
})

export default store
window.store = store