import './App.css'
import Download from './components/Download'
import Features from './components/Features'
import FnQ from './components/FnQ'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import NewsLetter from './components/NewsLetter'

function App() {

  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <HeroSection/>
      <Features/>
      <Download/>
      <FnQ/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default App
