import * as axios from 'axios'
import React from 'react'

class Users extends React.Component {
    constructor(props) {
        super(props)
    }

    getUsers = () => {
        if (!this.props.users.length) {
            axios
                .get('https://network.example.com/users')
                .then(({data}) => this.props.setUsers(data.items))
        }
    }
    render = () => {
        return (
            <div>
                <button onClick={this.getUsers}></button>
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