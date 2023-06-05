import React from 'react'
import PodcastImage from './PodcastImage';
import TileContent from './TileContent';
import FriendComment from './FriendComment';
import LikeButton from './LikeButton';
import AddToFavourites from './AddToFavourites';


const TileComponent = ({loggedIn}) => {
  return (
    <div>
      <p>This is the tile component</p>
      <PodcastImage/>
      <TileContent loggedIn = {loggedIn}/>
      <AddToFavourites/>
      <LikeButton/>
      <FriendComment/>
    </div>
  );
}




export default TileComponent