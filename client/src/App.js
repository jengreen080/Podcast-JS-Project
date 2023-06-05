import './App.css';
import { useQuery, gql } from '@apollo/client';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar';
import FavouritesList from './components/FavouritesList';
import MainFeed from './components/MainFeed';
import TrendingList from './components/TrendingList';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import { useState, useEffect } from 'react';
import { getUsers, addUser } from './services/PodcastUsersServices'


const Get_Top_5_Podcasts = gql`
    query getTop5Podcasts {
      getMultiplePodcastSeries(uuids:["257343bd-e9e9-47a5-af4a-e56e830b1cd4", "3c44a6e2-cab7-4d84-b7c8-afe6bab9d5d8", "6f007867-2ffe-41e8-a2b4-4de5ee553a2d", "a6894844-0ddc-429b-b18e-d2ac94861f76", "23bc333e-295a-48d9-b873-0e3d5e882f95"]){
        uuid
        name
        description
        imageUrl
    }
  }   
`;

let top5pods = ""

const DisplayTop5Podcasts = () => {
  const { loading, error, data } = useQuery(Get_Top_5_Podcasts);

  if (loading) return <p>Loading.....</p>;
  if (error) return <p>Error: {error.message}</p>;

  return data.getMultiplePodcastSeries.map(({uuid, name, description, imageUrl}) => (
    <li key={uuid}>
      <h3>{name}</h3>
      <img src={imageUrl} alt={name} style={{ width: '50px', height: 'auto' }} ></img>
      {/* <p>{description}</p> */}
    </li>
  ))
}


// Created three routes. 1. Login Page. 2. Home Page. 3. Podcast Page
// CONCERN - we dont want our NavBar/Faves/Trending to be visible on the login page as we dont want
// to be able to access the main page without being loged in. Unsure how to remove the
// nav from this screen specifically without adding to all manually. 
// Maybe we can use a turnary to say, if logged in user name = "", do not show links/searchbar 
// in nav bar? 
function App() {

// Logins

const [loggedIn, setLoggedIn] = useState({})

const handleLogin = (event) => {
  event.preventDefault()
  const userId = event.target.value
  const userToLogin = allUsers.find(user => userId == user._id)
  setLoggedIn(userToLogin)
}

const [allUsers, setAllUsers] = useState([])



// New User
const [newUser, setNewUser] = useState({})

const handleNewUser = (event) => {
  const nameofUser = event.target.value
  setNewUser({
    username: nameofUser,
    friends: [],
    wishlist: []
  })
  console.log(newUser)
}

const createUser = () => {
  addUser(newUser)
}




useEffect(() => {
  getUsers().then((allUsers) => {
    setAllUsers(allUsers)
  })
}, [])



//zhu changed2: 
// seperate login
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} allUsers={allUsers} setAllUsers={setAllUsers} handleLogin={handleLogin} createUser={createUser} handleNewUser={handleNewUser} />} />
      <Route path="/" element= <HomePage/> />
      <Route path="/podcast/:id"/>
{/* zhu notes: for filtering podcasts from nav bar:  */}
{/* optional: podcasts */}
{/* <Route path="/podcasts" element={<PodcastsPage/>} /> */}
{/* add to fav, post, rating button*/}
    </Routes>
  </Router>
);
}

export default App;
// monday to do : FavPodcastService



