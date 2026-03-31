import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    let navigate = useNavigate()
  return (
    <div>
      name : <input type="text" name="" id="" />
      password : <input type="password" name="" id="" />
      <button onClick={()=>navigate("/home")} >Login</button>
    </div>
  )
}

export default Login
