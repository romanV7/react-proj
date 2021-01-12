import { Component } from "react";
import { Redirect } from "react-router-dom";
import React from 'react'

export const withAuthRedirect = Component => {
    return class extends React.Component {
        render() {
            if (false === this.props.isAuth) return <Redirect to='/login'/>
            return <Component {...this.props}/>
        }
    }
}