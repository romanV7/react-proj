import axios from 'axios';
import React from 'react'
import React from 'react'
import Profile from './Profile';
import * as axios from 'axios'
import { connect } from 'react-redux';
import {setUserProfile, getProfile} from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = state => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {
    setUserProfile, getProfile
})(withRouter(ProfileContainer));