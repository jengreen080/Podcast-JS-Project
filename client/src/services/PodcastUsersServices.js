const baseURL = 'http://localhost:9000/api/podcast/users/'

export const getUsers = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const addUser = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const deleteUser = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

export const updateUser = (payload, id) => {
  return fetch(baseURL + id, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
  })
  .then(res => res.json())
}


// add by zhu, monday: 
// get user by id
export const getUsersById = (id) => {
    return fetch(baseURL + id)
      .then(res => res.json())
      .catch(error => {
        console.error('Error retrieving user:', error);
      });
  }
  
//get follows??
  export const getFollows = (id) => {
    return fetch(baseURL + id)
      .then(res => res.json())
      .then(user => {
        const friendIds = user.friends.map(friendId => friendId.replace('ObjectId(', '').replace(')', ''));
        const friendPromises = friendIds.map(friendId => getUsersById(friendId)); // Recursive call to getUsersById
  
        return Promise.all(friendPromises)
          .then(friends => {
            const friendNames = friends.map(friend => friend.username);
            return { ...user, friends: friendNames };
          });
      })
      .catch(error => {
        console.error('Error retrieving user:', error);
      });
  }
  