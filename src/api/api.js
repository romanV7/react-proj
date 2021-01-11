import * as axios from 'axios'

export const getUsers = () => {
    return axios.get(`https://network.example.com/users?page=${this.props.pagesCount}`, {
        withCredentials: true
    })
}

