import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import AboutMe from './sections/AboutMe'
import ContactMe from './sections/ContactMe'
import Coursework from './sections/Coursework'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Projects from './sections/Projects'

function App() {

  return (
    <>
      <div className='app'>
          <Header></Header>
        <div className='restrictWidth'>
          <Sidebar></Sidebar>
          <div className='mainContent'>
            <AboutMe></AboutMe>
            <Education></Education>
            <Experience></Experience>
            <Coursework></Coursework>
            <ContactMe></ContactMe>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
