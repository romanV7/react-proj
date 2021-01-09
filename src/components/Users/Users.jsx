import React from 'react'

const Users = props => {
    if (!props.users.length) {
        const users = [
            {id: 1, photoUrl: '', follwed: true, fullName: 'Bob', status: 'working...', location: {city: 'S', country: 'U'}},
            {id: 2, photoUrl: '', follwed: true, fullName: 'David', status: 'working...', location: {city: 'K', country: 'U'}},
        ]
        props.setUsers(users)    
    }
    return (
        <div>
            {
                props.users.map(u => 
                <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} />
                        </div>
                        <div>
                            {
                                u.followed 
                                    ? <button onClick={() => props.follow(u.id)}>Unfollow</button> 
                                    : <button onClick={() => props.unfollow(u.id)}>Follow</button>
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

export default Users