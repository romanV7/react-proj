import * as axios from 'axios'
import React from 'react'

const Users = props => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pagesCount)
    const pages = []
    for (let i = 0; i < pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(page => <span onClick={e => props.onPageChanged(page)}>{page}</span>)}
            </div>
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