import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = props => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg" />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photo.large} />
                <ProfileStatus />
            </div>
        </div>
    )
}

export default ProfileInfo