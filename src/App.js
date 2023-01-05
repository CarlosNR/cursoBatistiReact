import './App.css'
import React from 'react'
import {useState} from 'react'
import TeuNome from './components/TeuNome'
import Saudacao from './components/Saudacao'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Empresa from './pages/Empresa'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

//apenas imports aqui

function App() {
  //codigo aqui
  //state no arquivo pai
  const[nome, setNome] = useState()

  return (
    <div className="App">
    
      {/* code aqui */}
      <Router>
        <Navbar/>
        <Routes>
    
          <Route path="/" element={
            <h3>
              <Home/>
            </h3>}
          />

          <Route path="/empresa" element={
            <h3>
              <Empresa/>
            </h3>}
          />

          <Route path="/contato" element={
            <h3>
              <Contato/>
            </h3>}
          />
 
        </Routes>
        <Footer/>
      </Router>



      {/* <h2>State Lift</h2> */}
      {/* modifica nome em TeuNome */}
      {/* <TeuNome setNome={setNome}/> */}
      {/* usa nome como dado final */}
      {/* <Saudacao nome={nome}/> */}

    </div>
  )
}

// apenas exports aqui
export default App;
