import React from 'react'
import PodcastImage from './PodcastImage';
import TileContent from './TileContent';
import FriendComment from './FriendComment';
import LikeButton from './LikeButton';
import AddToFavourites from './AddToFavourites';
import styled from 'styled-components'


const TileComponent = ({loggedIn, likeCounter, setLikeCounter}) => {
  return (
    <div>
      <PodcastImage/>
      <TileContent loggedIn = {loggedIn} />
      <AddToFavourites/>
      <LikeButton likeCounter={likeCounter} setLikeCounter = {setLikeCounter}/>
      <FriendComment/>
    </div>
  );
}




export default TileComponent