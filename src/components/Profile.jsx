import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'


function Profile() {
    let data = useParams()
  return (
    <div>
      <h1>Profile</h1>
      <h3> you have logge in as : {data.username}</h3>
      <Link to='/profile/photos' >Photos</Link>
      <Link to='/profile/reels'>Reels</Link>
      <Outlet/>  
    </div>
  )
}

export default Profile
