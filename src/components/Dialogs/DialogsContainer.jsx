import React from 'react'
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer'
import StoreContext from '../../storeContext'

const DialogsContainer = (props) => {

    return ( 
        <StoreContext.Consumer> 
        {
            store => {
                const state = store.getState().dialogsPage

                const onSendMessageClick = () => store.dispatch(sendMessageCreator())
                const onNewMessageChange = body => store.dispatch(updateNewMessageBodyCreator(body))
    
                return <Dialogs 
                    sendMessage={onSendMessageClick} 
                    updateNewMessageBody={onNewMessageChange} 
                    dialogsPage={state}
                />
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;