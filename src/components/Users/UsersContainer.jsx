import React from 'react'
import { connect } from 'react-redux'
import { 
    followAC, 
    setUsersAC, 
    unfollowAC, 
    setCurrentPageAC, 
    setTotalUsersCountAC 
} from '../../redux/users-reducer'
import Users from './Users'

const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        follow: userId => dispatch(followAC(userId)),
        unfollow: userId => dispatch(unfollowAC(userId)),
        setUsers: users => dispatch(setUsersAC(users)),
        setCurrentPage: page => dispatch(setCurrentPageAC(page)),
        setTotalUsersCount: count => dispatch(setTotalUsersCountAC(count))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

