import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import brainfood from "../../assets/small/brainfood.png";
import doozie from "../../assets/small/doozie.jpeg";
import workday from "../../assets/small/workday.png";



function Portfolio() {
 
  return (
    <section >  
    <h1 Class="portfolio">PORTFOLIO</h1>    
      <div className="container">
        <div class="row">
          <div className="col">
            <img src={workday} className="rounded" style={{ width: "70%", height: "80%" }} alt="small" />
            <h3><a href="https://twodoozies-app.herokuapp.com/">WORK DAY</a></h3>
            <p>Having a hard time planning, try this.</p>
          </div>
          <div className="col" >
            <img src={doozie} className="rounded" style={{ width: "70%", height: "80%"}} alt="cover" /> <h3><a href="https://github.com/tyarchy">2DOOZIES</a></h3>
            <p>Still having a hard time planning, try this instead.</p>
          </div>
          <div>
            <img src={brainfood} className="rounded" style={{ width: "80%" }} alt="cover" />
            <h3><a href="https://twodoozies-app.herokuapp.com/">BRAIN FOOD</a></h3>
            <p>Having a hard time planning, try this.</p>
          </div>
        </div>
      </div>
    </section>

  );
}
export default Portfolio;
