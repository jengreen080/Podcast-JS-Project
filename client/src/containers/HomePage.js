import React from 'react'
import NavBar from '../components/NavBar';
import FavouritesList from '../components/FavouritesList';
import TrendingList from '../components/TrendingList';
import MainFeed from '../components/MainFeed';
// import Followers from '../components/Followers';

const HomePage = () => {
  return (
    <div className='home-container'>
      <NavBar/>
      <TrendingList/>
      <MainFeed/>
      <FavouritesList/>
      {/* <Followers/> */}
    </div>
  );
}

export default HomePage