import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = ({loggedIn, searchTerm, updateSearchTerm}) => {
  return (
    <div className='nav-bar'>
      <h1 className='nav-title'>App Title</h1>

      <form className='nav-form' onSubmit={(event) => {
        event.preventDefault()
        console.log({searchTerm})
        updateSearchTerm(event)
        }}>
        <input type='text' placeholder='Search Podcasts...' id="searchTerm"/>
        <button type='submit'>Q</button>
      </form>

      <ul className='nav-link-container'>
        <li><Link to='/'>Link 1 (home)</Link></li>
        <li><Link to='/login'>Link 2 (login)</Link></li>
        {/* <li>Welcome Back: {loggedIn.username}</li> */}
      </ul>
    </div>
  );
}

export default NavBar;