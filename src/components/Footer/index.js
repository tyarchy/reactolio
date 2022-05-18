import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import github from "../../assets/small/github.png";


function Footer() {
    return (

        <footer >
            <div className="row">
                <h1>MY GITHUB:</h1> <a href="https://github.com/tyarchy"> <img src={github} style={{ width: "25%", height: "75%" }} alt="cover" /></a>
                
            
            <div className="col">
                <h1 id="resume">CHECKOUT MY RESUME</h1>
            </div>
            </div>
        </footer>
    );
}

export default Footer;