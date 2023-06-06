import React from 'react'
import { useState } from 'react';

const Follows = ({loggedIn, friends}) => {

  const friendsInfo = friends.map((friend) => 
  <div key={friend._id}>
  <li>{friend.username}</li>
  {/* <li>Fav:{friend.wishlist}</li> */}
</div>);


  return (
    <div className='follows-container'>
    <h2>Follows</h2>
    <ul className="follows-list" >{friendsInfo}</ul>
    </div>
  );
}


export default Follows;