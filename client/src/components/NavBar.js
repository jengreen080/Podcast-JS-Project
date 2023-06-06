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
        <input className='nav-searchbar' type='text' placeholder='Search Podcasts...' id="searchTerm"/>
        <button id="nav-button" type='submit'>Search</button>
        
        {/* Below button needs an onlick that changes the display back to your feed */}
        <button id="nav-button" onClick={() => {
          searchTerm = null;
        }}>Clear</button>
      </form>
      

      <ul className='nav-link-container'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li>Welcome Back: {loggedIn}</li>
      </ul>
    </div>
  );
}

export default NavBar;