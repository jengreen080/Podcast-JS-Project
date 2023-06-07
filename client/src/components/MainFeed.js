import React from 'react'
import TileComponent from './TileComponent';
import styled from 'styled-components'
import LikeButton from './LikeButton';

const StyledTileComponent = styled.div`
background-color: thistle;
width: 80%;
margin: auto;
padding: 20px;
border: solid;
border-radius: 10px;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`//ZAday5

const MainFeed = ({loggedIn,addFriend, likeCounter, setLikeCounter, likeButtonText, setLikeButtonText, allReviews}) => {

  const reviewElements = allReviews.map((review) => {

    console.log(likeButtonText)

    return (
      <StyledTileComponent>
        <li className='review-tile' >
          <h3>{review.username}</h3>
          <button onClick={()=>addFriend(loggedIn._id,review.username)}>follow</button>
          <h5>{review.podcast.name}</h5>
          <img src={review.podcast.imgUrl}  style={{ width: '100px', height: 'auto' }}/>
          {/* <button onclick={()=>addToFav}>⭐️</button> */}
          
          <p>{review.text}</p>
          <LikeButton>{likeButtonText}</LikeButton>
          <button>Comment</button>
        </li>
        
      </StyledTileComponent>
    )
  })

  return (
    
      <ul>
        {reviewElements}
      </ul>
      
    // 
    //   <TileComponent 
    //   likeCounter={likeCounter} 
    //   setLikeCounter= {setLikeCounter}
    //   likeButtonText ={likeButtonText}
    //   setLikeButtonText = {setLikeButtonText}
    //   />
    // 
  );
}




export default MainFeed