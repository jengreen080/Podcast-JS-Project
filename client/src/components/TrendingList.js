import React from 'react'




const TrendingList = ({displayTop5Podcasts, top5pods}) => {

  // const listElements = top5pods.map(({uuid, name, description, imageUrl}) => (
  //   <li key={uuid}>
  //     <h3>{name}</h3>
  //   </li>
  // ))

  console.log(top5pods)
  

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