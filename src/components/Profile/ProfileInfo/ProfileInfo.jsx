import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = props => {
    return (
        <div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg" />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo