import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'

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
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    },

    
}

export default store
window.store = store