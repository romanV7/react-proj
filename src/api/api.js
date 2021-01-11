import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': ''
    }
})

export const getUsers = (pagesCount) => {
    return instance.get(`https://network.example.com/users?page=${pagesCount}`)
        .then(response => response.data)
}

