import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div style={{display: 'flex' , gap:'10px'}}>
      <Card name = "Alto 800" price = "500000" img = "https://th.bing.com/th/id/OIP.7Kj1UKWeYDMFYEyg5YErZAHaFN?w=239&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"/><br/>
      <Card name = "Fortuner" price = "1500000" img = "https://th.bing.com/th/id/OIP.HOgcPGJiGfufHJ0QXlVwCQHaEK?w=293&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"/><br/>
    </div>
  )
}

export default App
