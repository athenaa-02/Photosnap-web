import './App.css'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import Features from './components/Features/Features'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Stories from './components/Stories/Stories'
import Pricing from './components/Pricing/Pricing'

function App() {

  return (
    <>
    <Header></Header>

    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/Features' element={<Features></Features>}></Route>
      <Route path='/Stories' element={<Stories></Stories>}></Route>
      <Route path='/Pricing' element={<Pricing></Pricing>}></Route>
    </Routes>

    <Footer></Footer>
    </>
  )
}

export default App
