import React from 'react'

const LikeButton = ({likeCounter, setLikeCounter, likeButtonText, setLikeButtonText, review, tileToTouch, setTileToTouch, loggedIn}) => {
    
    console.log("like button text:", likeButtonText)
    console.log("User Logged In ID:", loggedIn._id)
    

    // not currently counting correctly
    const toggleButtonStatus = () => {
        if (likeButtonText === "Like") {
            setLikeButtonText("Unlike")
            setLikeCounter(likeCounter + 1)
        } else {
            setLikeButtonText("Like")
            setLikeCounter(likeCounter - 1)
    
    }

    const handleLikeButtonClick = () => {
        setTileToTouch(review)
        console.log("Review to touch:", review)
        toggleButtonStatus()
        }
    
        // console.log("Review to touch:", tileToTouch)
        // if (!tileToTouch) {
            
        //     return (
        //         <>
        //             <button>test</button>
        //         </>
        //     )
        // }
            

    return (
        <>
            <button onClick={handleLikeButtonClick}>{
                tileToTouch.likes.includes(loggedIn._id) ? "Unlike" : "Like"
            }</button>
        </>
    )

}}




export default LikeButton