import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from './Header'
import s from './Header.module.css'
import * as axios from 'axios'
import { connect } from 'react-redux'

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://network.example.com/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, email, login} = response.data.data
                    this.props.setUserData({id, email, login})
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setUserData})(HeaderContainer);