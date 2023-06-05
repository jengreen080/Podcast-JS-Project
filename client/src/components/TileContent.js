import React from 'react'

const TileContent = ({loggedIn}) => {
  return (
    <div>
    {/* below will need linked to the user */}
        <h3>{loggedIn}</h3>
        <p>This is the tile content message</p>
    </div>
  );
}

export default TileContent