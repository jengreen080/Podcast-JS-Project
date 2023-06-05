import React from 'react'
import TileComponent from './TileComponent';
import styled from 'styled-components'

const StyledTileComponent = styled.div`
background-color: thistle;
width: 80%;
margin: auto;
padding: 20px;
border: solid;
border-radius: 10px;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`

const MainFeed = () => {
  return (
    <StyledTileComponent>
      <TileComponent/>
    </StyledTileComponent>
  );
}




export default MainFeed