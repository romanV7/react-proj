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
    }
}

