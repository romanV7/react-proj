import React from 'react'
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg" />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;