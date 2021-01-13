import React from 'react'
import { connect } from 'react-redux'
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

const mapStateToProps = state => ({
    dialogsPage: state.dialogsPage,
})

const mapDispatchToProps = dispatch => ({
    sendMessage: () => dispatch(sendMessageCreator()),
    updateNewMessageBody: body => dispatch(updateNewMessageBodyCreator(body)),
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);