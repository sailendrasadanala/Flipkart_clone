import React from 'react'
import Nav from './components/Nav';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rightside from './components/Rightside';
import Leftcontainer from './components/Leftcontainer';
const App = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <Rightside/>
      <Leftcontainer/>
    </div>
  )
}

export default App
