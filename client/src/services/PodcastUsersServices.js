const baseURL = 'http://localhost:9000/api/podcast/users/'
//zhu change:
export const getUser=(id)=>{
  return fetch(baseURL + id)
  .then (res=>res.json())
}

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


  export const getFriends = (id) => {
    return fetch(baseURL + id + '/friends')
      .then((res) => res.json());
  }
  