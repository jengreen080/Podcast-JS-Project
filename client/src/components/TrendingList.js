import React from 'react'


const TrendingList = ({displayTop5Podcasts}) => {

  return (
    <div className='trending-container'>
      <h2>Trending</h2>
      <ul>
        <li>Test</li>
        {displayTop5Podcasts}
      </ul>
      
    </div>
  );
}

export default TrendingList