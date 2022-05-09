import React from 'react';

function Nav() {

  return (
    <header>
  <h2>
    <a href="/">
     Tyler Gregory
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          ABOUT ME
        </a>
      </li>
      <li className="mx-2">
        <a href="#about">
          PORTFOLIO
        </a>
      </li>
      <li className="mx-2">
        <a href="#about">
         RESUME
        </a>
      </li>
      <li>
      <a href="#about">
          CONTACT
        </a>
      </li>
    </ul>
  </nav>
</header>
  );
}

export default Nav;