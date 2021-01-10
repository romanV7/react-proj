import React from 'react'
import { connect } from 'react-redux'
import { 
    followAC, 
    setUsersAC, 
    unfollowAC, 
    setCurrentPageAC, 
    setTotalUsersCountAC,
    toggleIsFetchingAC
} from '../../redux/users-reducer'
import Preloader from '../common/Preloader/Preloader'
import Users from './Users'

class UsersContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios
            .get(`https://network.example.com/users?page=${this.props.pagesCount}`)
            .then(({data}) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalUsersCount)
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
            />
        </>
    }
}

const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow: followAC,
    unfollow: unfollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    toggleIsFetching: toggleIsFetchingAC
})(UsersContainer)