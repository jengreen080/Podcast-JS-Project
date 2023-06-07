import React from 'react'
import {useState} from 'react'
import TileComponent from './TileComponent';
import styled from 'styled-components'
import LikeButton from './LikeButton';
import { updateReview } from '../services/PodcastReviewsServices';
import { Collapse } from 'antd'
import ReviewItem from './ReviewItem';
const { Panel } = Collapse;

// const StyledTileComponent = styled.div`
// background-color: thistle;
// width: 80%;
// margin: auto;
// padding: 20px;
// border: solid;
// border-radius: 10px;
// box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
// `

const MainFeed = ({likeCounter, setLikeCounter, likeButtonText, setLikeButtonText, allReviews, setAllReviews, tileToTouch, setTileToTouch, loggedIn}) => {

    const reviewElements = allReviews.map((review) => {
    return (
      <ReviewItem loggedIn={loggedIn} review={review} allReviews={allReviews} setAllReviews={setAllReviews}/>
    )
  })

  return (
      <ul>
        {reviewElements}
      </ul>
  );
}




export default MainFeed