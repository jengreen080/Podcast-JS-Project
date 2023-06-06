import React from 'react'

const LikeButton = ({likeCounter, setLikeCounter, likeButtonText, setLikeButtonText}) => {
    
    // not currently counting correctly
    const toggleButtonStatus = () => {
        if (likeButtonText === "Like") {
            setLikeButtonText("Unlike")
            setLikeCounter(likeCounter + 1)
        } else {
            setLikeButtonText("Like")
            setLikeCounter(likeCounter - 1)
        }
        console.log(likeCounter)
    }

    const handleLikeButtonClick = () => {
        toggleButtonStatus()
        }
    

    // const likeAPost = () => {
    //     let increaseCounter = likeCounter + 1
    //     setLikeCounter(increaseCounter)
    //     console.log(likeCounter)
    // }

    // const toggleLike = () =>{
    //     let likeStatus = "Like"
    //         if (likeStatus === "Like") {
    //             likeStatus = "Unlike"
    //         } else {
    //             likeStatus = "Like"
    //         }
    // }
    
    // const increaseLikeCounter = () => {
    //     let numberOfLikes = (likeCounter +1)
    //     setLikeCounter(numberOfLikes)
    //     console.log(likeCounter)
    //     return `${numberOfLikes} likes`
    // }

    // const toggleButtonStatus = () => {
    //     let buttonStatus = "Like"
    //         if (buttonStatus === "Like") {
    //             buttonStatus = "Unlike"
    //         } else {
    //         if (buttonStatus === "Unlike") {
    //             buttonStatus = "Like"
    //         } }
                
    //         return buttonStatus
    //     }

    // const clickTheLikeButton = () => {
    //     increaseLikeCounter()
    //     toggleButtonStatus()
    // }

    return (
        <>
            <button onClick={handleLikeButtonClick}>{likeButtonText}</button>
            {/* <p>{increaseLikeCounter}</p> */}
        </>
    )
    // return (
    //     <div>
    //         <button id = "likeButton" onClick="toggleLike()">Like</button>
    //         {/* <button id = "likeButtin" onClick={likeAPost}>Like</button>

    //         <button id = "unlikeButton" onClick={likeAPost}>Unlike</button> */}
    //         <p>This is the like button</p>
    //     </div>
    // );
}




export default LikeButton