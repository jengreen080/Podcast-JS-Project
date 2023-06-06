import React from 'react'
import { Link, useNavigate } from "react-router-dom";


const NavBar = ({loggedIn, searchTerm, updateSearchTerm, selectedPodcast}) => {

  const navigate = useNavigate()

  return (
    <div className='nav-bar'>
      <h1 className='nav-title'>App Title</h1>

      <form className='nav-form' onSubmit={(event) => {
        event.preventDefault()
        console.log({searchTerm})
        updateSearchTerm(event)
        if (selectedPodcast && searchTerm) {
          navigate(`/podcast/${selectedPodcast.getPodcastSeries.uuid}`)
        }
        }}>
        <input className='nav-searchbar' type='text' placeholder='Search Podcasts...' id="searchTerm"/>
        <button id="nav-button" type='submit'>Search</button>
        <button id="nav-button" onClick={() => {
          navigate('/')
        }}>Clear</button>
      </form>
      

      <ul className='nav-link-container'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li>Welcome Back: {loggedIn.username}</li>
      </ul>
    </div>
  );
}

export default NavBar;