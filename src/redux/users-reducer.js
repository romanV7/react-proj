const ATTR = {
    FOLLOW: 'FOLLOW',
    UNFOLLOW: 'UNFOLLOW',
    SET_USERS: 'SET_USERS'
}

const initialState = {
    users: [],
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case ATTR.FOLLOW:
        case ATTR.UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, follwed: !follwed} : u)
            }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userId) => ({type: ATTR.FOLLOW, userId})
export const unfollowAC = (userId) => ({type: ATTR.UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: ATTR.SET_USERS, users})

export default usersReducer