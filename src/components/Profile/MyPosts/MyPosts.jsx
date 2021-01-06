import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    const postsData = [
        {id: 1, message: 'Hi!', likesCount: 23},
        {id: 2, message: 'It"s me', likesCount: 33}
    ]

    const postsElements = postsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
    
    return (
            <div className={s.postsBlock}>
                My posts
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
            <div className={s.posts}>
                {postsElements}
            </div>
           </div>
    )
}

export default MyPosts;