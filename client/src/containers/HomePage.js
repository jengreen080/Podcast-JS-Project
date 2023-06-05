import React from 'react'
import NavBar from '../components/NavBar';
import FavouritesList from '../components/FavouritesList';
import TrendingList from '../components/TrendingList';
import MainFeed from '../components/MainFeed';
// import Follows from '../components/Followers';

const HomePage = ({displayTop5Podcasts}) => {
  return (
    <div className='home-container'>
      <NavBar/>
      <TrendingList displayTop5Podcasts = {displayTop5Podcasts}/>
      <MainFeed/>
      <FavouritesList/>
      {/* <Followers/> */}
    </div>
  );
}

export default HomePage