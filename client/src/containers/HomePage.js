import React from 'react'
import NavBar from '../components/NavBar';
import FavouritesList from '../components/FavouritesList';
import TrendingList from '../components/TrendingList';
import MainFeed from '../components/MainFeed';
import Follows from '../components/Follows';
import styled from 'styled-components';


const HomePage = ({displayTop5Podcasts,loggedIn, testFriend,searchTerm, updateSearchTerm, likeCounter, setLikeCounter, likeButtonText, setLikeButtonText}) => {
  return (
    <div className='home-container'>
      <NavBar loggedIn={loggedIn} searchTerm={searchTerm} updateSearchTerm={updateSearchTerm}/>
      <TrendingList displayTop5Podcasts = {displayTop5Podcasts}/>
      <MainFeed 
      likeCounter={likeCounter} 
      setLikeCounter={setLikeCounter}
      likeButtonText ={likeButtonText}
      setLikeButtonText = {setLikeButtonText}
      />
      <FavouritesList loggedIn={loggedIn}/>
      <Follows loggedIn={loggedIn}/>
      <button onClick={testFriend}>TEST!</button>
    </div>
  );
}

export default HomePage