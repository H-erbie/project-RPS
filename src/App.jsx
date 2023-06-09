import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Options from './components/Options'
import Status from './components/Status'
import RulesModal from './components/RulesModal'

function App() {

  return (
    <div className="App w-screen h-screen justify-center items-center flex flex-col">
      <Navbar/>
      <Options/>
      <Status/>
      <RulesModal/>
    </div>
  )
}

export default App
