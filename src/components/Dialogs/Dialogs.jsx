import React from 'react'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'

const Dialogs = (props) => {
    const state = props.dialogsPage

    const dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    const messagesElements = state.messages.map(message => <Message message={message.message}/>)
    const newMessageBody = state.newMessageBody

    const onSendMessageClick = () => props.sendMessage()

    const onNewMessageChange = (e) => {
        const body = e.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;