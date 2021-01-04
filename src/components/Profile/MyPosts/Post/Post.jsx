import React from 'react'
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
            {
                props.message
            }
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;