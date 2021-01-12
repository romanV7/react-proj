const ATTR = {
    SET_USER_DATA: 'SET_USER_DATA'
}

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case ATTR.SET_USER_DATA:
            return {
                ...state, 
                ...action.data, 
                isAuth: true
            }
        default:
            return state
    }
}

export const setUserData = (userId, email, login) => ({
    type: ATTR.SET_USER_DATA, data: {userId, email, login}
})

export const authMe = () => dispatch => {
    usersAPI.authMe()
    .then(response => {
        if (response.data.resultCode === 0) {
            const {id, email, login} = response.data.data
            dispatch(setUserData({id, email, login}))
        }
    })
}

export default authReducer