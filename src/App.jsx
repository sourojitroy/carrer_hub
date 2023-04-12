import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Background from './components/Background/Background'
import JobList from './components/JobList/JobList'
import SingleCard from './components/SingleCard/SingleCard'
import { Outlet, useLoaderData } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default App
