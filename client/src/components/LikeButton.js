import React from 'react'

const LikeButton = ({likeCounter, setLikeCounter}) => {
    
    const likeAPost = () => {
        let increaseCounter = likeCounter + 1
        setLikeCounter(increaseCounter)
        console.log(likeCounter)
    }
    
    return (
        <div>
            <button onClick={likeAPost}>Like</button>
            <p>This is the like button</p>
        </div>
    );
}




export default LikeButton