import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import AboutMe from './sections/AboutMe'
import ContactMe from './sections/ContactMe'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Projects from './sections/Projects'

function App() {

  return (
    <>
      <div className='app'>
          <Header></Header>
        <div className='restrictWidth'>
          <div className='mainContent'>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <Education></Education>
            <Experience></Experience>
            <ContactMe></ContactMe>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
