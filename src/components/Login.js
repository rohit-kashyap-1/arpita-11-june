import React, { useState } from 'react'

function Login() {
  //state
  let [username, setUsername] = useState('')
  let [password, setPassword] = useState('')
  let [usernameError, setUsernameError] = useState('')
  let [passwordError, setPasswordError] = useState('')


  const handleUsername = (e) => {
    let a = e.target.value
    setUsername(a)
  }
  const handlePassword = (e) => {
    let a = e.target.value
    setPassword(a)
  }
  const handleSubmit = (e) => {
    //username,password
    if (username.length == 0) {
     // alert('Username can not be empty')
     setUsernameError('Username can not be empty')
      return
    }else{
      setUsernameError('')
    }
    if (password.length == 0) {
      //alert('Password can not be empty')
      setPasswordError('Password can not be empty')
      return
    }else{
      setPasswordError('')
    }
    let data = { username: username, password: password }
    let d = JSON.stringify(data)
    console.log(d)
  }

  const submit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <form action='' onSubmit={submit} method=''>
        <div className='input'>
          <input type='text' placeholder='Username' value={username} onChange={handleUsername} />
          <span className='error'>{usernameError}</span>
        </div>
        <div className='input'>
          <input type='password' placeholder='Password' value={password} onChange={handlePassword} />
          <span className='error'>{passwordError}</span>
        </div>
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  )
}

export default Login


/*
username must be of atleast 8 characters with no spaces

password must be of atlest 8 characters

//to find a character in a string: indexOf(),
//Rohit kumar kashyap =

*/
