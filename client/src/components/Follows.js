import React from 'react'
import { useState } from 'react';

const Follows = ({loggedIn}) => {
  return (
    <div className='follows-container'>
    <h2>Follows</h2>
    console.log(username: {loggedIn.username},
    follows: {loggedIn.friends})
    </div>
  );
}


export default Follows;