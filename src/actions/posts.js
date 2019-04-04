import * as Api from '../utils/api';
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export const receivePosts = () => dispatch =>
  Api.getPosts().then(posts =>
    dispatch({
      type: RECEIVE_POSTS,
      posts,
    })
  );
// export function receivePosts (posts) {
//   return {
//     type: RECEIVE_POSTS,
//     posts,
//   }
// }

// export const receivePosts = posts => ({
//   type: RECEIVE_POSTS,
//   posts
// });

/* Posts actions */



