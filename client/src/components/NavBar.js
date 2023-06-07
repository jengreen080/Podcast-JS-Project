import React from 'react'
import { Link, useNavigate } from "react-router-dom";


const NavBar = ({loggedIn, searchTerm, updateSearchTerm, selectedPodcast}) => {

  const navigate = useNavigate()

  return (
    <div className='nav-bar'>
      <h1 className='nav-title'><span className='purple'>C</span>hatt<span className='turquoise'>e</span>r</h1>

      <form className='nav-form' onSubmit={(event) => {
        event.preventDefault()
        console.log({searchTerm})
        {if (selectedPodcast) {
          console.log("Name:", selectedPodcast.name)
        }}
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
        <Link to='/'><li id='nav-list-item'>Home</li></Link>
        <Link to='/login'><li id='nav-list-item'>Log out</li></Link>
        {/* <li>Welcome Back: {loggedIn.name}</li> */}
      </ul>
    </div>
  );
}

export default NavBar;