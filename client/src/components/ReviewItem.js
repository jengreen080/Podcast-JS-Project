import React from 'react'
import {useState} from 'react'
import TileComponent from './TileComponent';
import styled from 'styled-components'
import LikeButton from './LikeButton';
import { updateReview } from '../services/PodcastReviewsServices';
import { Collapse } from 'antd'
const { Panel } = Collapse;

const StyledTileComponent = styled.div`
background-color: thistle;
width: 80%;
margin: auto;
padding: 20px;
border: solid;
border-radius: 10px;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`

const ReviewItem = ({loggedIn, review, allReviews, setAllReviews}) => {

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
        <li>
          <p>{comment.username}</p>
          <p>{comment.text}</p>
        </li>
      )
    })

  return (
    <StyledTileComponent review={review}>
    <li className='review-tile' >
      <h3>{review.username}</h3>
      <h5>{review.podcast.name}</h5>
      <p>{review.text}</p>
      {/* <img src={review.podcast.imgUrl} /> */}
      {/* <LikeButton likeButtonText={likeButtonText} setLikeButtonText={setLikeButtonText} setLikeCounter={setLikeCounter} likeCounter={likeCounter} review={review} tileToTouch={tileToTouch} setTileToTouch={setTileToTouch} loggedIn={loggedIn}  /> */}
      <form onSubmit={(event) => handleComment(event)}>
        <input type='text' onChange={handleCommentChange} />
        <input hidden name="id"  value={review._id}/>
        <button type='submit'>Comment</button>
      </form>
    </li>
    <div>
    <Collapse>
      <Panel header="Comments" key="1">
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