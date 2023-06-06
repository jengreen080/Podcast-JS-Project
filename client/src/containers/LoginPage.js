import React, {useState} from 'react'




const LoginPage = ({loggedIn, setLoggedIn, allUsers, setAllUsers, handleLogin, createUser, handleNewUser}) => {

  const userElement = allUsers.map((user) => {
    return (
      <option key={user._id} value={user._id}>{user.username}</option>
    )
  })


  return (
    // <div className='login-image-container'>
    //   <div className='login-form-container'>
    //     <h1>Chatter</h1>
    //       <p>Select User...</p>
    //       <select onChange={handleLogin}>
    //         <option></option>
    //         {userElement}
    //       </select>
    //       <p>Add a new user...</p>
    //       <form onSubmit={createUser}>
    //         <input placeholder='Username' type='text' onChange={handleNewUser}/>
    //         <input type='submit' value='Create'/>
    //       </form>
    //   </div>
    // </div>
    <>
    <div className='login-image-container'></div>
    <div className='login-form-container'>
        <h1 className='login-title'><span className='purple'>C</span>hatt<span className="turquoise" >e</span>r</h1>
          <p className='login-text'>Select User...</p>
          <select className='login-form-item' onChange={handleLogin}>
            <option></option>
            {userElement}
          </select>
          <p className='login-text'>Add a new user...</p>
          <form onSubmit={createUser}>
            <input className='login-form-item' placeholder='Username' type='text' onChange={handleNewUser}/>
            <input className='login-form-button' type='submit' value='Create'/>
          </form>
      </div>
      </>
  );
}

export default LoginPage


// ensure below code is incorporated
// element={<LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} allUsers={allUsers} setAllUsers={setAllUsers} handleLogin={handleLogin} createUser={createUser} handleNewUser={handleNewUser} />} />