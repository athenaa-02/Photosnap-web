import './App.css'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import Features from './components/Features/Features'
import Home from './components/Home/Home'
import Header from './components/Header/header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <Header></Header>

    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/Features' element={<Features></Features>}></Route>
    </Routes>

    <Footer></Footer>
    </>
  )
}

export default App
