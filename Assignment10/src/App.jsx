import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Text from './components/Text.jsx'
import Card from './components/Card.jsx'
import Address from './components/Address.jsx'

function App() {
  return (
    <>
      <Navbar />
      <br />
      <Text />

      <div className="flex flex-wrap justify-center gap-8 p-8">
        <Card
          name="David"
          title="Researcher"
          img="https://th.bing.com/th/id/R.2304125dc9f12942ea152e7616634c2b?rik=9LS9NSSadpjOvQ&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fdcr%2f65o%2fdcr65oGKi.jpg&ehk=L69OmmgwMtnNxYw1Z0no9NqTDxc%2bmSjSuEBH4xWqqDY%3d&risl=&pid=ImgRaw&r=0"
        />
        <Card
          name="Mike"
          title="Developer"
          img="https://th.bing.com/th/id/R.2304125dc9f12942ea152e7616634c2b?rik=9LS9NSSadpjOvQ&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fdcr%2f65o%2fdcr65oGKi.jpg&ehk=L69OmmgwMtnNxYw1Z0no9NqTDxc%2bmSjSuEBH4xWqqDY%3d&risl=&pid=ImgRaw&r=0"
        />
        <Card
          name="Alexa"
          title="Designer"
          img="https://th.bing.com/th/id/R.2304125dc9f12942ea152e7616634c2b?rik=9LS9NSSadpjOvQ&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fdcr%2f65o%2fdcr65oGKi.jpg&ehk=L69OmmgwMtnNxYw1Z0no9NqTDxc%2bmSjSuEBH4xWqqDY%3d&risl=&pid=ImgRaw&r=0"
        />
      </div>

      <Address />
    </>
  )
}

export default App
