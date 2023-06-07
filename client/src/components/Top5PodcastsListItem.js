// import { useQuery, gql } from '@apollo/client';



// const Top5PodcastsListItems = () => {

//   const Get_Top_5_Podcasts = gql`
//   query getTop5Podcasts {
//     getMultiplePodcastSeries(uuids:["257343bd-e9e9-47a5-af4a-e56e830b1cd4", "42f3a19a-965b-418b-9176-2c8b697d4c3f", "6f007867-2ffe-41e8-a2b4-4de5ee553a2d", "a6894844-0ddc-429b-b18e-d2ac94861f76", "ab2f3f61-f363-4ee2-8ba6-dce087008232"]){
//       uuid
//       name
//       description
//       imageUrl
//   }
// }   
// `;

//   const { loading, error, data } = useQuery(Get_Top_5_Podcasts);

//   if (loading) return <p>Loading.....</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return data.getMultiplePodcastSeries.map(({uuid, name, description, imageUrl}) => (
//     <li key={uuid} id='trending-list-item' >
//       <img src={imageUrl} alt={name} className='trending-item-image'></img>
//       <h3 className='trending-item-title'>{name}</h3>
//     </li>
//   ))
// }

// export default Top5PodcastsListItems