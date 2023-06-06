import React from 'react'
import NavBar from '../components/NavBar';
import FavouritesList from '../components/FavouritesList';
import TrendingList from '../components/TrendingList';
import MainFeed from '../components/MainFeed';
import PodcastInformation from '../components/PodcastInformation';
import Follows from '../components/Follows';
import styled from 'styled-components';


const PodcastPage = ({displayTop5Podcasts,loggedIn, testFriend, searchTerm, updateSearchTerm, likeCounter, setLikeCounter, selectedPodcast, likeButtonText, setLikeButtonText}) => {
  return (
    <div className='home-container'>
      <NavBar loggedIn={loggedIn} searchTerm={searchTerm} updateSearchTerm={updateSearchTerm}/>
      <TrendingList displayTop5Podcasts = {displayTop5Podcasts}/>
      {selectedPodcast ? <PodcastInformation selectedPodcast={selectedPodcast} /> : null}
      <FavouritesList loggedIn={loggedIn}/>
      <Follows loggedIn={loggedIn}/>
    </div>
  );
}

export default PodcastPage