const ATTR = {
    FOLLOW: 'FOLLOW',
    UNFOLLOW: 'UNFOLLOW',
    SET_USERS: 'SET_USERS',
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
    SET_TOTAL_USER_COUNT: 'SET_TOTAL_USER_COUNT'
}

const initialState = {
    users: [],
    pageSize: 0,
    totalUsersCount: 0
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case ATTR.FOLLOW:
        case ATTR.UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, follwed: !follwed} : u)
            }
        case ATTR.SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        case ATTR.SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case ATTR.SET_TOTAL_USER_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }    
        default:
            return state
    }
}

export const followAC = (userId) => ({type: ATTR.FOLLOW, userId})
export const unfollowAC = (userId) => ({type: ATTR.UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: ATTR.SET_USERS, users})
export const setCurrentPage = (page) => ({type: ATTR.SET_CURRENT_PAGE, page})
export const setTotalUsersCountAC = count => ({type: ATTR.SET_TOTAL_USER_COUNT, count})

export default usersReducer