import { Component } from "react";
import { Redirect } from "react-router-dom";
import React from 'react'
import { connect } from "react-redux";

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
})

export const withAuthRedirect = Component => {
    class RedirectComponent extends React.Component {
        render() {
            if (false === this.props.isAuth) return <Redirect to='/login'/>
            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToProps)(RedirectComponent)
}