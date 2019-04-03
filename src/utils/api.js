export const API = `http://localhost:3001`;


let token = localStorage.token;

if (!token)
    token = localStorage.token = Math.random()
        .toString(36)
        .substr(-8);

export const headers = {
    Accept: 'application/json',
    Authorization: token,
    'Content-Type': 'application/json'
};

export const getInitialData = () => (dispatch) => {
    fetch(`${API}/posts`, { headers })
      .then(res => res.json())
      .then(posts => dispatch(posts));
  };

//   export function getInitialData () {
//     return Promise.all([
//       _getUsers(),
//     ]).then(([users]) => ({
//       users,
//     }))
//   }