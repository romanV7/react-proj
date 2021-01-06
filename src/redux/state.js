const state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi!', likesCount: 23},
            {id: 2, message: 'It"s me', likesCount: 33}
        ],

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
}

export default state