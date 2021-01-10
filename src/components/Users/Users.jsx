import * as axios from 'axios'
import React from 'react'

class Users extends React.Component {
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

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pagesCount)
        const pages = []
        for (let i = 0; i < pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(page => <span onClick={e => this.onPageChanged(page)}>{page}</span>)}
                </div>
                {
                    this.props.users.map(u => 
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photoUrl} />
                            </div>
                            <div>
                                {
                                    u.followed 
                                        ? <button onClick={() => this.props.follow(u.id)}>Unfollow</button> 
                                        : <button onClick={() => this.props.unfollow(u.id)}>Follow</button>
                                }
                            </div>
                        </span>
                        <span>
                        <span>
                                <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                                <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                        </span>
                    </div>
                    )
                }
            </div>
        )
    }
}

export default Users