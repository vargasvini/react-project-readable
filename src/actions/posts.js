
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export function receivePosts (posts) {
  return {
    type: RECEIVE_POSTS,
    posts,
  }
}

// export const receivePosts = posts => ({
//   type: RECEIVE_POSTS,
//   posts
// });


