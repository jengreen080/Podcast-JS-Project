import React from 'react'
import styled from 'styled-components'

const StyledImage = styled.img`
width: 50%;
`

const PodcastInformation = ({selectedPodcast}) => {
  
  return (
    <div className='podcast-information-container'>
      <StyledImage src={selectedPodcast.getPodcastSeries.imageUrl}/>
      <h3>{selectedPodcast.getPodcastSeries.name}</h3>
      <p>{selectedPodcast.getPodcastSeries.description}</p>
      <button>Add To Favourites</button>
      <form>
        <label for='podcast-review-select'>Rate: </label>
        <select name='podcast-review-select'>
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
        <label for='podcast-review-input'>Leave a comment:</label>
        <input name='podcast-review-input'></input>
      </form>
    </div>
  );
}




export default PodcastInformation