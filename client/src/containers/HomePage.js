import React from 'react'
import NavBar from '../components/NavBar';
import FavouritesList from '../components/FavouritesList';
import TrendingList from '../components/TrendingList';
import MainFeed from '../components/MainFeed';
import PodcastInformation from '../components/PodcastInformation';
import Follows from '../components/Follows';
import styled from 'styled-components';
import TileComponent from '../components/TileComponent';


const HomePage = ({displayTop5Podcasts,loggedIn, friends, searchTerm, updateSearchTerm, likeCounter, setLikeCounter, selectedPodcast, likeButtonText, setLikeButtonText, userFavourites, DisplayUserFavouritePodcasts}) => {

  return (
    <div className='home-container'>
      <NavBar loggedIn={loggedIn} searchTerm={searchTerm} updateSearchTerm={updateSearchTerm} selectedPodcast={selectedPodcast}/>
      <TrendingList displayTop5Podcasts = {displayTop5Podcasts}/>


      {searchTerm && data ? <PodcastInformation data={data} /> : <MainFeed 

      likeCounter={likeCounter} 
      setLikeCounter={setLikeCounter}
      likeButtonText ={likeButtonText}
      setLikeButtonText = {setLikeButtonText}
      />}

      <MainFeed 
      likeCounter={likeCounter} 
      setLikeCounter={setLikeCounter}
      likeButtonText ={likeButtonText}
      setLikeButtonText = {setLikeButtonText}
      />

      <FavouritesList loggedIn={loggedIn} userFavourites={userFavourites} DisplayUserFavouritePodcasts={DisplayUserFavouritePodcasts}/>
      <Follows loggedIn={loggedIn}  friends={friends}/>
      <TileComponent loggedIn={loggedIn} likeCounter={likeCounter} setLikeCounter={setLikeCounter} likeButtonText={likeButtonText} setLikeButtonText={setLikeButtonText}/>
      {/* Below button will need to be added into tile. Commented out whilst I work on Podcast Information  */}
      {/* <button onClick={testFriend}>TEST!</button> */}

    </div>
  );
}

export default HomePage