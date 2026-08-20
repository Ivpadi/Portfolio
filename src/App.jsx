import './App.css'
import Header from './components/Header'
import AboutMe from './sections/AboutMe'
import ContactMe from './sections/ContactMe'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Footer from './components/Footer'

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
            <Footer></Footer>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
