import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <div className='app'>
        <div className='restrictWidth'>
          <Header></Header>
          <Sidebar></Sidebar>
          <div className='mainContent'></div>
        </div>
      </div>
    </>
  )
}

export default App
