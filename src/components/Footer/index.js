import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import github from "../../assets/small/github.png";


function Footer() {
    return (

        <footer >
            <div className="row">
                <h1>MY GITHUB:</h1> <a href="https://github.com/tyarchy"> <img src={github} style={{ width: "25%", height: "75%" }} alt="github" /></a>


                <div className="col">
                    <h1 id="resume">
                        <a href="https://github.com/tyarchy/reactolio/blob/develop/src/assets/small/resume.pdf"
                            class="link"
                        >CHECKOUT MY RESUME</a></h1>
                </div>
            </div>
        </footer>
    );
}

export default Footer;