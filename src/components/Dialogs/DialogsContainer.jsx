import React from 'react'
import { connect } from 'react-redux'
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

const mapStateToProps = state => ({
    dialogsPage: state.dialogsPage,
})

const mapDispatchToProps = dispatch => ({
    sendMessage: () => dispatch(sendMessageCreator()),
    updateNewMessageBody: body => dispatch(updateNewMessageBodyCreator(body)),
})

const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))

export default DialogsContainer;