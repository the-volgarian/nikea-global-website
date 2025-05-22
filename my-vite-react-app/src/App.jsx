import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderBar from './components/HeaderBar/HeaderBar'
import Home from './components/home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Services from './components/Services/Services'
import Footer from './components/Footer/Footer'
import Terms from './components/Terms/Terms'
import FairUse from './components/FairUse/FairUse'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton'
import Incoterms from './components/Incoterms/Incoterms'
import Containers from './components/Containers/Containers'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
<Router> 
      <div className='App'>
        <HeaderBar />
       
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/terms"element={<Terms />} />
          <Route path="/privacy-policy"element={<FairUse />} />
          <Route path="/incoterms"element = {<Incoterms />} />
          <Route path= "/containers" element = {<Containers />} />
        </Routes>
        <ScrollToTopButton />
        <Footer />
      </div>
</Router>    
  )
}

export default App
