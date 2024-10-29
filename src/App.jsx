import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fake from './Components/second'
import Dummy from './Components/first'
import Main from './Components/main'
import M from './Components/mounting'
import Fakes from './Components/fake'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Fakes/>
    </>
  )
}

export default App
