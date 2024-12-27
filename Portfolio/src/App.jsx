import { useState } from 'react'
import Navbar from './Navbar'
import Greeting from './Greeting'
import Projects from './Projects'
function App() {

  return (
    <div className='w-full h-full bg-zinc-900 text-white'>
      <Navbar/>
      <Greeting/>
      <Projects/>
    </div>
  )
}

export default App
