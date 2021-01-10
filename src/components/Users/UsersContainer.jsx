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

class UsersContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        axios
            .get(`https://network.example.com/users?page=${this.props.pagesCount}`)
            .then(({data}) => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalUsersCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
    }

    render = () => {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pagesCount={this.props.pagesCount}
            users={this.props.users}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)