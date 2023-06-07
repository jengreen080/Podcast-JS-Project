import React from 'react'
import {useState} from 'react'
import TileComponent from './TileComponent';
import styled from 'styled-components'
import LikeButton from './LikeButton';
import { updateReview } from '../services/PodcastReviewsServices';
import { Collapse } from 'antd'
import ReviewItem from './ReviewItem';
const { Panel } = Collapse;


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