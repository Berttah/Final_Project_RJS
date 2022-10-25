import React from "react";
import './styles/global.css'

import NavBar from './components/containers/NavBar/NavBar'
import Footer from "./components/containers/Footer/Footer";
import Main from "./components/containers/Main/Main";


function App() {
  return (
    <div>
      <NavBar />
      <Main />
      <Footer />
    </div>
  )
}

export default App