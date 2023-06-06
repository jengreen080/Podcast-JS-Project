import React from 'react'
import NavBar from '../components/NavBar';
import FavouritesList from '../components/FavouritesList';
import TrendingList from '../components/TrendingList';
import MainFeed from '../components/MainFeed';
import PodcastInformation from '../components/PodcastInformation';
import Follows from '../components/Follows';
import styled from 'styled-components';


const HomePage = ({displayTop5Podcasts,loggedIn, friends, searchTerm, updateSearchTerm, likeCounter, setLikeCounter, selectedPodcast, likeButtonText, setLikeButtonText, userFavourites, DisplayUserFavouritePodcasts, allReviews}) => {
  return (
    <div className='home-container'>
      <NavBar loggedIn={loggedIn} searchTerm={searchTerm} updateSearchTerm={updateSearchTerm} selectedPodcast={selectedPodcast}/>
      <TrendingList displayTop5Podcasts = {displayTop5Podcasts}/>
      <MainFeed 
      allReviews={allReviews}
      likeCounter={likeCounter} 
      setLikeCounter={setLikeCounter}
      likeButtonText ={likeButtonText}
      setLikeButtonText = {setLikeButtonText}
      />
      <FavouritesList loggedIn={loggedIn} userFavourites={userFavourites} DisplayUserFavouritePodcasts={DisplayUserFavouritePodcasts}/>
      <Follows loggedIn={loggedIn} friends={friends}/>

      
      {/* Below button will need to be added into tile. Commented out whilst I work on Podcast Information  */}
      {/* <button onClick={testFriend}>TEST!</button> */}
    </div>
  );
}

export default HomePage