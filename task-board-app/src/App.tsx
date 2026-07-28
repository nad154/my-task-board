import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


import { TaskCard } from './components/TaskCard'

function App() {

  return (
    <div >
      <div className="flex-1 items-center text-center mt-10">
        <p className="font-bold">TITLE</p>
      </div>
      <div className="flex items-center justify-center mt-10">
        <TaskCard taskName="Test" taskStatus="Completed" taskIcon="Cake"/>
      </div >
      

    </div>
  )
}

export default App
