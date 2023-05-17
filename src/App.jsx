import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputForm from "./components/form"
import MainList from './components/main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <InputForm/>
        <MainList/>
      </div>
      
    </>
  )
}

export default App
