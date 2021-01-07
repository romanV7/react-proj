const ATTR = {
    UPDATE_NEW_MESSAGE_BODY: 'UPDATE_NEW_MESSAGE_BODY',
    SEND_MESSAGE: 'SEND_MESSAGE'
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

const dialogsReducer = (state, action) => {
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