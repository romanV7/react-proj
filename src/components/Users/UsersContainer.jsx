import React from 'react'
import { connect } from 'react-redux'
import { 
    follow, 
    setUsers, 
    unfollow, 
    setCurrentPage, 
    setTotalUsersCount,
    toggleIsFetching,
    getUsersThunkCreator
} from '../../redux/users-reducer'
import Preloader from '../common/Preloader/Preloader'
import Users from './Users'

class UsersContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage)
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
    getUsersThunkCreator,
})(UsersContainer)