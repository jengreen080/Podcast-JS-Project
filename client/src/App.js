import { useQuery, gql } from '@apollo/client';

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


function DisplayTop5Podcasts() {
  const { loading, error, data } = useQuery(Get_Top_5_Podcasts);

  if (loading) return <p>Loading.....</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data)
  console.log(data.getMultiplePodcastSeries)

  return data.getMultiplePodcastSeries.map(({uuid, name, description, imageUrl}) => (
    <div key={uuid}>
      <h3>{name}</h3>
    </div>
  ))
}



function App() {
  return (
    <div className="App">
      <h2>Our App Lives</h2>
      <DisplayTop5Podcasts/>
    </div>
  );
}

export default App;
