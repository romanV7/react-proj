import React from 'react'
import { connect } from 'react-redux';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';

const mapStateToProps = state => ({
    posts: state.posts,
    newPostText: state.newPostText
})

const mapDispatchToProps = dispatch => ({
    addPost: () => dispatch(addPostActionCreator()),
    updateNewPostText: text => dispatch(updateNewPostTextActionCreator(text))
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;