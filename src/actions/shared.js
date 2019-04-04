import { getInitialData } from '../utils/api'
import { receivePosts } from '../actions/posts'
import { showLoading, hideLoading } from 'react-redux-loading'
import { getPosts } from '../utils/api';

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getPosts()
      .then(({ posts }) => {
        dispatch(receivePosts(posts))
        dispatch(hideLoading())
      })
  }
}