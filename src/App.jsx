import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <div className='app'>
          <Header></Header>
        <div className='restrictWidth'>
          <Sidebar></Sidebar>
          <div className='mainContent'></div>
        </div>
      </div>
    </>
  )
}

export default App
