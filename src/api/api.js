import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://network.example.com/',
    withCredentials: true,
    headers: {
        'API-KEY': ''
    }
})

export const getUsers = (pagesCount) => {
    return instance.get(baseURL + 'users?page=' + pagesCount)
        .then(response => response.data)
}

