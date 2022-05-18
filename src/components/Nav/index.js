import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Nav() {

  function categorySelected(name) {
    console.log(`${name} clicked`)
  }

  const categories = [
       
    
  ];

  return (
    <header>
       <nav>
        <ul className="flex-row">
        {categories.map((category) => (
            <li
              className="mx-1"
              key={category.name}
            >
              <span onClick={categorySelected} >
                {category.name}
              </span>
            </li>
          ))}
          <li className="mx-2">
            <a href="#about">
              ABOUT ME
            </a>
          </li>
          <li className="mx-2">
            <a href="#resume">
              RESUME
            </a>
          </li>
          <li className="mx-2">
            <a href="#contact-form">
              CONTACT
            </a>
          </li>
          <li className="mx-2">
            <a href="#portfolio">
              PORTFOLIO
            </a>
          </li>
       
        </ul>
      </nav>
    </header>
  );
}

export default Nav;