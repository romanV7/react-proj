import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'
import StoreContext from '../../../storeContext';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer> 
        {
            store => {
                const state = store.getState()
                const addPost = () => store.dispatch(addPostActionCreator())
                const onPostChange = text => store.dispatch(updateNewPostTextActionCreator(text))

                return <MyPosts 
                    addPost={addPost}
                    updateNewPostText={onPostChange}
                    posts={state.profilePafe.posts}
                    newPostText={state.profilePafe.newPostText}
                />
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;