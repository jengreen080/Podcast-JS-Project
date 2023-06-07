import React from 'react'
import { useState } from 'react';
const Follows = ({loggedIn, friends}) => {



  if (!friends) {
    // Handle the case where data is undefined or empty
    return (
      <div className='follows-container'>
      <h2 className='follows-title'>Follows</h2>
      </div>
      )
  }
  
  const friendsInfo = friends.map((friend) =>
  <div key={friend._id}>
  <li>{friend.username}</li>
  {/* <li>Fav:{friend.wishlist}</li> */}
</div>);
  return (
    <div className='follows-container'>
    <h2 className='follows-title'>Follows</h2>
    <ul className="follows-list" >{friendsInfo}</ul>
    </div>
  );
}
export default Follows;





