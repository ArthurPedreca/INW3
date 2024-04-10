import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'

function App() {

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
