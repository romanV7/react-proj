import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    const state = props.store.getState()
    const addPost = () => props.store.dispatch(addPostActionCreator())
    const onPostChange = text => props.store.dispatch(updateNewPostTextActionCreator(text))

    return (
            <MyPosts 
            addPost={addPost}
            updateNewPostText={onPostChange}
            posts={state.profilePafe.posts}
            newPostText={state.profilePafe.newPostText}/>
    )
}

export default MyPostsContainer;