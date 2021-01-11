import * as axios from 'axios'

export const getUsers = (pagesCount) => {
    return axios.get(`https://network.example.com/users?page=${pagesCount}`, {
        withCredentials: true
    })
        .then(response => response.data)
}

