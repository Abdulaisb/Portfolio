import Navbar from './Navbar'
import Greeting from './Greeting'
import Projects from './Projects'
import Experience from './Experience'
import About from './About'


function App() {

  return (
    <div className='w-full h-full bg-zinc-900 text-white'>
      <Navbar/>
      <Greeting/>
      <About/>
      <Projects/>
      <Experience/>
    </div>
  )
}

export default App
