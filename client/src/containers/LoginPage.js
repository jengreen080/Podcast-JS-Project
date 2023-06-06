import React, {useState} from 'react'




const LoginPage = ({loggedIn, setLoggedIn, allUsers, setAllUsers, handleLogin, createUser, handleNewUser}) => {

  const userElement = allUsers.map((user) => {
    return (
      <option key={user._id} value={user._id}>{user.username}</option>
    )
  })


  return (
    <>
    <div className='login-image-container'></div>
    <div className='login-form-container'>
        <h1 className='login-title'><span className='purple'>C</span>hatt<span className="turquoise" >e</span>r</h1>
          <p className='login-text'>Select User...</p>
          <select className='login-form-item' onChange={handleLogin}>
            <option hidden value=''>Select User</option>
            {userElement}
          </select>
          <p className='login-text'>Add a new user...</p>
          <form onSubmit={createUser}>
            <input className='login-form-item' placeholder='Username' type='text' onChange={handleNewUser} required/>
            <input className='login-form-button' type='submit' value='Create' required/>
          </form>
      </div>
      </>
  );
}

export default LoginPage


// ensure below code is incorporated
// element={<LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} allUsers={allUsers} setAllUsers={setAllUsers} handleLogin={handleLogin} createUser={createUser} handleNewUser={handleNewUser} />} />