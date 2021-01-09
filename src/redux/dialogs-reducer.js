const ATTR = {
    UPDATE_NEW_MESSAGE_BODY: 'UPDATE_NEW_MESSAGE_BODY',
    SEND_MESSAGE: 'SEND_MESSAGE'
}

const initialState = {
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
}

const updateNewMessageBody = (state, body) => {
    state.newMessageBody = body
    return state
}

const sendMessage = (state) => {
    const body = state.newMessageBody
    state.newMessageBody = ''
    state.messages.push({id: 6, message: body})
    return state
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ATTR.UPDATE_NEW_MESSAGE_BODY:
            updateNewMessageBody(state, action.body)
        case ATTR.SEND_MESSAGE:
            sendMessage(state)
        default:
            return state
    }

}

export const sendMessageCreator = () => ({type: ATTR.SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({
    type: ATTR.UPDATE_NEW_MESSAGE_BODY, body 
})

export default dialogsReducer