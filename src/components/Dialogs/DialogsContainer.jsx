import React from 'react'
import { connect } from 'react-redux'
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

const mapStateToProps = state => ({
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
})

const mapDispatchToProps = dispatch => ({
    sendMessage: () => dispatch(sendMessageCreator()),
    updateNewMessageBody: body => dispatch(updateNewMessageBodyCreator(body)),
})

const DialogsContainer = connect(
    mapStateToProps, mapDispatchToProps
)(withAuthRedirect(Dialogs))

export default DialogsContainer;