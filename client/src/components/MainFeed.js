import React from 'react'
import TileComponent from './TileComponent';
import styled from 'styled-components'

const StyledTileComponent = styled.div`
background-color: thistle;
width: 80%;
margin: auto;
padding: 20px;
border: solid;
border-radius: 10px;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`

const MainFeed = ({likeCounter, setLikeCounter, likeButtonText, setLikeButtonText, allReviews}) => {

  const reviewElements = allReviews.map((review) => {
    return (
      <li className='review-tile' >
        <h3>{review.username}</h3>
        <h5>{review.podcast.name}</h5>
        <p>{review.text}</p>
        {/* <img src={review.podcast.imgUrl} /> */}
      </li>
    )
  })

  return (
    <div>
      <ul>
        {reviewElements}
      </ul>
    </div>
    // <StyledTileComponent>
    //   <TileComponent 
    //   likeCounter={likeCounter} 
    //   setLikeCounter= {setLikeCounter}
    //   likeButtonText ={likeButtonText}
    //   setLikeButtonText = {setLikeButtonText}
    //   />
    // </StyledTileComponent>
  );
}




export default MainFeed