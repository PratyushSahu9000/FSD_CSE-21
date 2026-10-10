// import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'



function Home(){
  return <h1>This is my home page.</h1>
}

function About(){
  return <h1>This is my about page.</h1>
}

function Phone(){
  return <h1>This is my phone number page.</h1>
}


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to = "/">HOME PAGE</Link> {" "}
          <Link to = "/about">ABOUT PAGE</Link>{" "}
          <Link to = "/phone">PHONE NO.</Link>{" "}
        </nav>

        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/phone" element = {<Phone/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
