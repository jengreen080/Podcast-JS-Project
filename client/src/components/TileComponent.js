import React from 'react'
import PodcastImage from './PodcastImage';
import TileContent from './TileContent';
import FriendComment from './FriendComment';
import LikeButton from './LikeButton';
import AddToFavourites from './AddToFavourites';
import styled from 'styled-components'


const TileComponent = ({loggedIn, likeCounter, setLikeCounter, likeButtonText, setLikeButtonText}) => {
  return (
    <div>
      <PodcastImage/>
      <TileContent loggedIn = {loggedIn} />
      <AddToFavourites/>
      <LikeButton 
      likeCounter={likeCounter} 
      setLikeCounter = {setLikeCounter}
      likeButtonText ={likeButtonText}
      setLikeButtonText = {setLikeButtonText}
      />
      <FriendComment/>
    </div>
  );
}




export default TileComponent