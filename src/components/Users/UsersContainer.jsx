import React from 'react'
import { connect } from 'react-redux'
import { 
    follow, 
    setUsers, 
    unfollow, 
    setCurrentPage, 
    setTotalUsersCount,
    toggleIsFetching
} from '../../redux/users-reducer'
import Preloader from '../common/Preloader/Preloader'
import Users from './Users'
import {usersAPI} from '../../api/api'

class UsersContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.pagesCount).then((response) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.items)
            this.props.setTotalUsersCount(response.totalUsersCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
    }

    render = () => {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pagesCount={this.props.pagesCount}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>
    }
}

const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, 
    setTotalUsersCount, toggleIsFetching, toggleFollowingProgress,
})(UsersContainer)