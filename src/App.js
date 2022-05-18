import React from 'react';
import './App.css';
import ContactForm from './components/Contact';
import About from './components/About';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from "./components/Portfolio";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Header></Header>
        <About></About>
        <Portfolio></Portfolio>
        <ContactForm></ContactForm>
        <Footer></Footer>
      </main>      
    </div>
    



  );
}



export default App;

