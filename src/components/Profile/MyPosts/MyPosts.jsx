import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = React.memo((props) => {
    const newPostElement = React.createRef()
    const postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    const onAddPost = () => props.addPost()

    const onPostChange = () => {
        const text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
            <div className={s.postsBlock}>
                My posts
                <div>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                    </div>
                    <div>
                        <button onClick={onAddPost}>Add post</button>
                    </div>
                </div>
            <div className={s.posts}>
                {postsElements}
            </div>
           </div>
    )
})

export default MyPosts;