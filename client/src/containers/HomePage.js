import React from 'react'
import NavBar from '../components/NavBar';
import FavouritesList from '../components/FavouritesList';
import TrendingList from '../components/TrendingList';
import MainFeed from '../components/MainFeed';
import Follows from '../components/Follows';
import styled from 'styled-components';

// const MainFeedStyled = styled`
// background-color: red;
// `

const HomePage = ({displayTop5Podcasts,loggedIn, likeCounter, setLikeCounter}) => {
  return (
    <div className='home-container'>
      <NavBar loggedIn={loggedIn}/>
      <TrendingList displayTop5Podcasts = {displayTop5Podcasts}/>
      <MainFeed likeCounter={likeCounter} setLikeCounter={setLikeCounter}/>
      <FavouritesList loggedIn={loggedIn}/>
      <Follows loggedIn={loggedIn}/>
    </div>
  );
}

export default HomePage