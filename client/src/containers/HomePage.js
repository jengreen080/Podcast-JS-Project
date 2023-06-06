import React from 'react'
import NavBar from '../components/NavBar';
import FavouritesList from '../components/FavouritesList';
import TrendingList from '../components/TrendingList';
import MainFeed from '../components/MainFeed';
import PodcastInformation from '../components/PodcastInformation';
import Follows from '../components/Follows';
import styled from 'styled-components';


const HomePage = ({displayTop5Podcasts,loggedIn, testFriend, searchTerm, updateSearchTerm, likeCounter, setLikeCounter, data, likeButtonText, setLikeButtonText}) => {
  return (
    <div className='home-container'>
      <NavBar loggedIn={loggedIn} searchTerm={searchTerm} updateSearchTerm={updateSearchTerm}/>
      <TrendingList displayTop5Podcasts = {displayTop5Podcasts}/>
      {searchTerm ? <PodcastInformation data={data} /> : <MainFeed 
      likeCounter={likeCounter} 
      setLikeCounter={setLikeCounter}
      likeButtonText ={likeButtonText}
      setLikeButtonText = {setLikeButtonText}
      />}
      <FavouritesList loggedIn={loggedIn}/>
      <Follows loggedIn={loggedIn}/>

      
      {/* Below button will need to be added into tile. Commented out whilst I work on Podcast Information  */}
      {/* <button onClick={testFriend}>TEST!</button> */}
    </div>
  );
}

export default HomePage