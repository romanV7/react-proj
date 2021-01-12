import React from 'react'
import {usersAPI} from '../../api/api'

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
                                    ? <button disabled={props.followingInProgress.some(userId => userId === u.id)} onClick={() => {
                                        props.toggleFollowingProgress(true, u.id)
                                        usersAPI.follow(u.id)
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.follow(u.id)
                                                }
                                                props.toggleFollowingProgress(false, u.id)
                                            })
                                    }}>Unfollow</button> 
                                    : <button disabled={props.followingInProgress.some(userId => userId === u.id)} onClick={() => {
                                        props.toggleFollowingProgress(true, u.id)
                                        usersAPI.unfollow(u.id)
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(u.id)
                                                }
                                                props.toggleFollowingProgress(false, u.id)
                                            })
                                    }}>Follow</button>
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