import React from 'react'
import {useState} from 'react'
import TileComponent from './TileComponent';
import styled from 'styled-components'
import LikeButton from './LikeButton';
import { updateReview } from '../services/PodcastReviewsServices';
import { Collapse } from 'antd'
const { Panel } = Collapse;

const StyledTileComponent = styled.div`
background-color: rgb(16, 16, 17);
width: 80%;
margin: auto;
padding: 20px;
border: solid;
border-radius: 10px;
box-shadow: rgba(249, 249, 249, 0.02) 0px 1px 3px 0px, rgba(255, 255, 255, 0.15) 0px 0px 0px 1px;
list-style-type: none;
margin-bottom: 5vh;
align-self: center;
`

const ReviewItem = ({loggedIn, review, allReviews, setAllReviews, addFriend}) => {

  const [commentToAdd, setCommentToAdd] = useState("")
  // const [reviewsToShow, setReviewsToShow] = useState([])



  const handleCommentChange = (event) => {
    console.log(event.target.value)
    setCommentToAdd(event.target.value)
  }

  const handleComment = (event) => {
    event.preventDefault()

    console.log(event)
    console.log(event.target[1].value)
    //THIS [1] IS TO GRAB THE HIDDEN VALUE FROM THE FORM
    const reviewId = event.target[1].value
    
    const objectToAdd = {
      username: loggedIn.username,
      text: commentToAdd
    }
    
    updateReview(objectToAdd, reviewId)


    const reviewToFind = allReviews.find((review) => {
      return reviewId === review._id
    })
    const indexReviewToFind = allReviews.indexOf(reviewToFind)
    const copyAllReviews = [... allReviews]
    const copyOfReview = {... copyAllReviews[indexReviewToFind]}
    const copyOfComments = [... copyOfReview.comments, objectToAdd]
    copyOfReview.comments = copyOfComments
    copyAllReviews[indexReviewToFind] = copyOfReview
    setAllReviews(copyAllReviews)
  }

    const commentElements = review.comments.map((comment) => {
      return (
        <li className='comment-element-container'>
          <p className='comment-element-name'>{comment.username}:</p>
          <p className='comment-element-text'>"{comment.text}"</p>
        </li>
      )
    })

  return (
    <StyledTileComponent review={review}>
    <li className='review-tile'>
      <div className='image-name-podcast'>
        <img src={review.podcast.imgUrl} className='review-image' />
        <div className='name-podcast'>
          <div className='username-container'>
            <h3 className='review-username'>{review.username}</h3>
            <button className='follow-button' onClick={()=>addFriend(loggedIn._id,review.username)} >Follow</button>
          </div>
          <h5 className='rating-podcast'>{review.rating}/5: {review.podcast.name}</h5>
        </div>
      </div>
      <div className='form-comments-container'>
        <p className='review-text'>"{review.text}"</p>
        {/* <LikeButton likeButtonText={likeButtonText} setLikeButtonText={setLikeButtonText} setLikeCounter={setLikeCounter} likeCounter={likeCounter} review={review} tileToTouch={tileToTouch} setTileToTouch={setTileToTouch} loggedIn={loggedIn}  /> */}
        <form onSubmit={(event) => handleComment(event)}>
          <input type='text' placeholder='Comment..' onChange={handleCommentChange} className='comment-input' />
          <input hidden name="id"  value={review._id}/>
          <button type='submit' className='comment-submit-button'>Post</button>
        </form>
      </div>
    </li>
    <div>
    <Collapse className='collapse'>
      <Panel header="Comments" key="1" className='panel'>
        <ul>
          {commentElements}
        </ul>
      </Panel>
    </Collapse>
    </div>
    
    </StyledTileComponent> 
  )
}

export default ReviewItem