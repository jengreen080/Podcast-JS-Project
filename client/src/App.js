import './App.css';
import { useQuery, gql } from '@apollo/client';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar';
import FavouritesList from './components/FavouritesList';
import MainFeed from './components/MainFeed';
import TrendingList from './components/TrendingList';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';

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

  // logging in console to see what data we are getting back from api
  console.log(data)
  console.log(data.getMultiplePodcastSeries)

  // below - tried to make it a variable but I can't use it outside
  top5pods = data.getMultiplePodcastSeries

  // We need to pass this down to the homepage to be used where we want rather than it just displaying
  // wherever like it is now
  return data.getMultiplePodcastSeries.map(({uuid, name, description, imageUrl}) => (
    <li key={uuid}>
      <h3>{name}</h3>
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
  return (
    <Router>
      <NavBar/>
      <TrendingList DisplayTop5Podcasts={DisplayTop5Podcasts} top5pods={top5pods}/>
      <FavouritesList />
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/' element={<HomePage/>} />
        <Route path='/podcast/:id'/>
        <Route path='test' element={<DisplayTop5Podcasts/>} />
      </Routes>
    </Router>
  );
}

export default App;
