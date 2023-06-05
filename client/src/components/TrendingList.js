import React from 'react'

const TrendingList = ({displayTop5Podcasts}) => {

  return (
    <div className='trending-container'>
      <h2 className='tre'>Trending</h2>
        <ul className='trending-list-container'>
          {displayTop5Podcasts()}
        </ul>
      
    </div>
  );
}

export default TrendingList