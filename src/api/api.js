import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://network.example.com/',
    withCredentials: true,
    headers: {
        'API-KEY': ''
    }
})

export const usersAPI = {
    getUsers(pagesCount) {
        return instance.get(baseURL + 'users?page=' + pagesCount)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.delete(baseURL + 'follow' + userId)
    },
    unfollow(userId) {
        return instance.post(baseURL + 'unfollow' + userId)
    },
    getProfile() {
        return instance.get(baseURL + 'profile/' + userId)
    },
}

export const authAPI = {
    authMe() {
        return instance.get(baseURL + 'auth/me')
    },
    login(email, password, rememberMe = false) {
        return instance.post(babel + 'login', {
            email, password, rememberMe
        })
    },
    logout() {
        return instance.delete(babel + 'login')
    }
}

