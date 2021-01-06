
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
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {},
    addPost () {
        const newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 2
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }
    
}

export default store
window.store = store