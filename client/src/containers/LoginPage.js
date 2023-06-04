import React, {useState} from 'react'


const LoginPage = ({loggedIn, setLoggedIn, allUsers, setAllUsers, handleLogin, createUser, handleNewUser}) => {

  const userElement = allUsers.map((user) => {
    return (
      <option key={user._id} value={user._id}>{user.username}</option>
    )
  })


  return (
    <div className='login-container'>
    <h3>LOGIN PAGE</h3>
      <select onChange={handleLogin}>
        {userElement}
      </select>

    <h2>{loggedIn.username} is now logged in</h2>

    <form onSubmit={createUser}>
      <p>Add a new user...</p>
      <input placeholder='Username' type='text' onChange={handleNewUser}/>
      <input type='submit' value='Create'/>
    </form>


    </div>
  );
}

export default LoginPage