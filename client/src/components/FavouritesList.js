import React from 'react'




const FavouritesList = ({ userFavourites, DisplayUserFavouritePodcasts}) => {

  
  
  // if (!userFavourites.length) {
  //   console.log("Faves", userFavourites)
  //   return null
  // } 
  console.log("userFavoruites outside of if", userFavourites )
  return (
    <div className='favourites-container'>
    <h2>Favourites</h2>
    <ul>
      {DisplayUserFavouritePodcasts(userFavourites)}
    </ul>
    </div>
  );
}

export default FavouritesList