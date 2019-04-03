import { getInitialData } from '../utils/api'
import { receivePosts } from '../actions/posts'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ posts }) => {
        dispatch(receivePosts(posts))
        dispatch(hideLoading())
      })
  }
}