// import React, { useState } from 'react'
// import Home from './components/Home'
// import About from './components/About'
// import Profile from './components/Profile'

// //react router dom

// function App() {
//   let [page,setPage] = useState("home")
//   return (
//     <>
//       <button onClick={()=>setPage("home")}>Home</button>
//       <button onClick={()=>setPage("about")}>About</button>
//       <button onClick={()=>setPage("profile")}>Profile</button>
//       {page=="home" ? <Home/> : page=="about" ? <About/> : <Profile/>}
//     </>
    
//   )
// }
// export default App


import React, { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import { Link,Route,Routes } from 'react-router-dom'
import Photos from './components/Photos'
import Reels from './components/Reels'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import Login from './components/Login'
//react router dom

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Layout/>} >
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/profile/:myname" element={<Profile/>} >
            <Route path="photos" element={<Photos/>} />
            <Route path="reels"  element={<Reels/>}/>
          </Route>
        </Route>
      </Routes>
    </>
    
  )
}
export default App