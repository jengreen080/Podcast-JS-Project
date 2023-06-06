const baseURL = 'http://localhost:9000/api/podcast/reviews/'


export const getReviews = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const addReview = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const deleteReview = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

// export const updateReview = (payload, id) => {
//   return fetch(baseURL + id, {
//         method: 'PUT',
//         body: JSON.stringify(payload),
//         headers: { 'Content-Type': 'application/json' }
//   })
//   .then(res => res.json())
// }

