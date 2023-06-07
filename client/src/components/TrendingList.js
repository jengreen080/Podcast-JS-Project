import React from 'react'
// import Top5PodcastsListItems from './Top5PodcastsListItem';

const TrendingList = ({displayTop5Podcasts}) => {

  return (
    <div className='trending-container'>
      <h2 className='trending-title'>Trending</h2>
        <ul className='trending-list-container'>
          {/* <Top5PodcastsListItems/> */}
          {displayTop5Podcasts()}
        </ul>
      
    </div>
  );
}

export default TrendingList