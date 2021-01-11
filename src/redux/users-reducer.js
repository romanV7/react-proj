const ATTR = {
    FOLLOW: 'FOLLOW',
    UNFOLLOW: 'UNFOLLOW',
    SET_USERS: 'SET_USERS',
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
    SET_TOTAL_USER_COUNT: 'SET_TOTAL_USER_COUNT',
    TOGGLE_IS_FETCHING: 'TOGGLE_IS_FETCHING',
    TOGGLE_IS_FOLLOWING_PROGRESS: 'TOGGLE_IS_FOLLOWING_PROGRESS'
}

const initialState = {
    users: [],
    pageSize: 0,
    totalUsersCount: 0,
    isFetching: false,
    followingInProgress: []
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
        case ATTR.TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case ATTR.TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, 
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const follow = (userId) => ({type: ATTR.FOLLOW, userId})
export const unfollow = (userId) => ({type: ATTR.UNFOLLOW, userId})
export const setUsers = (users) => ({type: ATTR.SET_USERS, users})
export const setCurrentPage = (page) => ({type: ATTR.SET_CURRENT_PAGE, page})
export const setTotalUsersCount = count => ({type: ATTR.SET_TOTAL_USER_COUNT, count})
export const toggleIsFetching = isFetching => ({type: ATTR.TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: ATTR.TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export default usersReducer