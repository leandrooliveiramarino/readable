const api = "http://localhost:3001"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8);
}

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getInitialData = () => {
  return Promise.all([
    getCategories(),
    getPosts()
  ]).then(([
    categories,
    posts
  ]) => ({
    categories,
    posts
  }))
}

const getCategories = () =>
  fetch(`${api}/categories`, {
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => data.categories);

const getPosts = () =>
  fetch(`${api}/posts`, {
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => data);

export const savePost = post =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  .then(res => res.json())
  .then(data => data);
