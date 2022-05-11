import React from 'react';
import './App.css';
import ContactForm from './components/Contact';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from "./components/Portfolio";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div>
      <Nav></Nav>      
      <main>
      <About></About>
      <Portfolio></Portfolio>
      <ContactForm></ContactForm>        
      </main>
    </div>
    
    
  );
}



export default App;

