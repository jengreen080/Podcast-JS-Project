import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import { addReview } from '../services/PodcastReviewsServices';
import { useNavigate } from "react-router-dom";


const StyledImage = styled.img`
width: 50%;
`

const PodcastInformation = ({addPodToWishlist,selectedPodcast, loggedIn, createReview}) => {

  const navigate = useNavigate();

  const [text, setText] = useState('')
  const [rating, setRating] = useState(1)
  const [comments, setComments] = useState([])

  if (!selectedPodcast) {
    return <p>Loading...</p>; 
  }
  
  const podcastName = selectedPodcast.getPodcastSeries.name;
  const podcastUrl = selectedPodcast.getPodcastSeries.imageUrl;
  const reviewerName = loggedIn.username




  const handleTextChange = (event) => {
    setText(event.target.value)
  }
  const handleRatingChange = (event) => {
    setRating(event.target.value)
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    const newReview = {
      podcast: {
        name: podcastName,
        imgUrl: podcastUrl
      },
      username: reviewerName,
      text: text,
      rating: rating,
      likes: 0,
      comments: comments
      }
      createReview(newReview)
      setText('')
      setRating(1)
      navigate('/')
    }

  return (
    <div className='podcast-information-container'>
      <StyledImage src={selectedPodcast.getPodcastSeries.imageUrl}/>
      <h3 className='podcast-title' >{selectedPodcast.getPodcastSeries.name}</h3>
      <p className='pp_paragraph'>{selectedPodcast.getPodcastSeries.description}</p>
      <br></br>
      <button className='add-faves-button' onClick={()=>{addPodToWishlist(loggedIn._id,selectedPodcast.getPodcastSeries.uuid)}}>Add To Favourites</button>
     

      <form className='pp_form' onSubmit={handleSubmit}>
        <br></br>
        <label className='pp_label' for='podcast-review-select'>Rate: </label>
        <select className='pp_rating' name='podcast-review-select' onChange={handleRatingChange}>
        <option disabled selected value> -- select an option -- </option>
          <option value='5' >5</option>
          <option value='4' >4</option>
          <option value='3' >3</option>
          <option value='2' >2</option>
          <option value='1' >1</option>
        </select>
        <br></br>
        <label className='pp_label' for='podcast-review-input'>Leave a comment:</label>
        {/* <input type="text" onChange={handleTextChange}></input> */}
        <textarea className='pp_text_box' rows="4" cols="50" name="comment" form="review-form" placeholder='Enter text here...' onChange={handleTextChange}></textarea>
        <button className='review-submit-button' type='submit'>Submit</button>
      </form>
    </div>
  );
}




export default PodcastInformation