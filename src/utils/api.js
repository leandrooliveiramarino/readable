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
  .then(data => data.reduce((carry, post) => {
      if(!carry) {
        return {
          [post.id]: post
        }
      }
      carry[post.id] = post;
      return carry;
    }, null));

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

export const removePost = postId =>
  fetch(`${api}/posts/${postId}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => data);

export const updatePost = (post, postId) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      body: post.body,
      title: post.title
    })
  })
  .then(res => res.json())
  .then(data => data);

export const updateVote = (postId, option) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      option
    })
  })
  .then(res => res.json())
  .then(data => data);
