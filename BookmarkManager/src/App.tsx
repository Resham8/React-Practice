import './App.css'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <HeroSection/>
      <Footer/>
    </div>
  )
}

export default App
