import './App.css';
import { useNavigate } from "react-router-dom";
import { useQuery, gql } from '@apollo/client';
import {Routes, Route, Link} from "react-router-dom"
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import PodcastPage from './containers/PodcastPage';
import { useState, useEffect } from 'react';
import { getUsers, addUser, getUser, updateUser,getFriends } from './services/PodcastUsersServices'
import Follows from './components/Follows';

const GET_PODCAST_BY_INPUT = gql`
      query getOneBySearchTerm($searchTerm: String!) {
        getPodcastSeries(name: $searchTerm) {
          uuid
          name
          description
          imageUrl
      }
    }
  `;



const Get_Top_5_Podcasts = gql`
    query getTop5Podcasts {
      getMultiplePodcastSeries(uuids:["257343bd-e9e9-47a5-af4a-e56e830b1cd4", "42f3a19a-965b-418b-9176-2c8b697d4c3f", "6f007867-2ffe-41e8-a2b4-4de5ee553a2d", "a6894844-0ddc-429b-b18e-d2ac94861f76", "ab2f3f61-f363-4ee2-8ba6-dce087008232"]){
        uuid
        name
        description
        imageUrl
    }
  }   
`;



const DisplayTop5Podcasts = () => {
  const { loading, error, data } = useQuery(Get_Top_5_Podcasts);

  if (loading) return <p>Loading.....</p>;
  if (error) return <p>Error: {error.message}</p>;

  return data.getMultiplePodcastSeries.map(({uuid, name, description, imageUrl}) => (
    <li key={uuid} id='trending-list-item' >
      <img src={imageUrl} alt={name} className='trending-item-image'></img>
      <h3 className='trending-item-title'>{name}</h3>
    </li>
  ))
}



function App() {


  // States

  const [loggedIn, setLoggedIn] = useState({})
  const [likeCounter, setLikeCounter] = useState(1)
  const [likeButtonText, setLikeButtonText] = useState("Like")
  const [allUsers, setAllUsers] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [newUser, setNewUser] = useState({})

  const [selectedPodcast, setSelectedPodcast] = useState({})
  
  



// Logins
  const navigate = useNavigate();

  // const [friends, setFriends] = useState([]);
  const [loggedIn, setLoggedIn] = useState({})

  const handleLogin = (event) => {
    event.preventDefault()
    const userId = event.target.value
    const userToLogin = allUsers.find(user => userId == user._id)
    setLoggedIn(userToLogin)
    navigate("/");
}


// show friends
const [friends, setFriends] = useState([]);

useEffect(() => {
  getFriends(loggedIn._id)
    .then((friends) => {
      setFriends(friends);
    })
    .catch((error) => {
      console.error(error);
    });
}, [loggedIn._id]); 













const [allUsers, setAllUsers] = useState([])
const [searchTerm, setSearchTerm] = useState("")





const { loading, error, data } = useQuery(GET_PODCAST_BY_INPUT, {
  variables: { searchTerm },
}, [searchTerm]);
}, [selectedPodcast]);
console.log(data)
// setSelectedPodcast(data)
useEffect( () => {
  setSelectedPodcast(data)
}, [data])






// New User

const [newUser, setNewUser] = useState({})


const handleNewUser = (event) => {
  const nameofUser = event.target.value
  setNewUser({
    username: nameofUser,
    friends: [],
    wishlist: []
  })
}

const createUser = () => {
  addUser(newUser)
}


//update new search
const updateSearchTerm = (event) =>{
  console.log(event.target.searchTerm.value)
  setSearchTerm(event.target.searchTerm.value)
}



useEffect(() => {
  getUsers().then((allUsers) => {
    setAllUsers(allUsers)
  })
}, [])



return (


  
  <Routes>
    <Route path="/login" element={<LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} allUsers={allUsers} setAllUsers={setAllUsers} handleLogin={handleLogin} createUser={createUser} handleNewUser={handleNewUser} />} />

    <Route path="/" element= {<HomePage 
    friends={friends}
    loggedIn={loggedIn}
    displayTop5Podcasts = {DisplayTop5Podcasts} 
    searchTerm={searchTerm} 
    updateSearchTerm={updateSearchTerm} 
    likeCounter={likeCounter} 
    setLikeCounter ={setLikeCounter}
    likeButtonText ={likeButtonText}
    setLikeButtonText = {setLikeButtonText}
    selectedPodcast={selectedPodcast} />} 
    />
    <Route path="/podcast/:id" element= {<PodcastPage 
    displayTop5Podcasts = {DisplayTop5Podcasts} 
    searchTerm={searchTerm} 
    updateSearchTerm={updateSearchTerm} 
    testFriend={testFriend} 
    likeCounter={likeCounter} 
    setLikeCounter ={setLikeCounter}
    likeButtonText ={likeButtonText}
    setLikeButtonText = {setLikeButtonText} selectedPodcast={selectedPodcast} />} 
    />
  </Routes>
);
    
}
export default App;




// useEffect(() => {
//   getFriends(loggedIn._id)
//     .then((friends) => {
//       const friendNames = friends.map((friend) => friend.username);
//       setFriends(friendNames);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }, [loggedIn._id]); 
