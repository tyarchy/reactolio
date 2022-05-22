import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import brainfood from "../../assets/small/brainfood.png";
import doozie from "../../assets/small/doozie.jpeg";
import workday from "../../assets/small/workday.png";
import someweather from "../../assets/small/someweather.png";
import quiz from "../../assets/small/quiz.png";
import readme from "../../assets/small/readme.png";


function Portfolio() {

  return (
    <section >
      <header id="portfolio" class="portfolio">PORTFOLIO</header>
      <div className="container-fluid">
        <div class="move">
          <div class="row">
            <div className="col">
              <img src={workday} className="rounded" style={{ width: "70%", height: "70%" }} alt="small" />
              <h3><a href="https://tyarchy.github.io/work-day-todos/">WORK DAY</a></h3>
              <p>Having a hard time planning,<br></br> try this.</p>
            </div>
            <div className="col" >
              <img src={doozie} className="rounded" style={{ width: "70%", height: "70%" }} alt="cover" /> <h3><a href="https://github.com/tyarchy">2DOOZIES</a></h3>
              <p>Still having a hard time planning,<br></br>try this instead.</p>
            </div>
            <div className="col">
              <img src={brainfood} className="rounded" style={{ width: "70%", height: "70%" }} alt="cover" />
              <h3><a href="https://lillylav.github.io/brain-food/">BRAIN FOOD</a></h3>
              <p>Looking for something to listen too.<br></br> Try this.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div class="move">
          <div class="row">
            <div className="col">
              <img src={someweather} className="rounded" style={{ width: "70%", height: "80%" }} alt="small" />
              <h3><a href="https://tyarchy.github.io/weather/">SOME WEATHER</a></h3>
              <p>Get a weather update from any town in the USA.</p>
            </div>
            <div className="col" >
              <img src={quiz} className="rounded" style={{ width: "70%", height: "80%" }} alt="cover" /> <h3><a href="https://tyarchy.github.io/Mega_Trivia_Quiz/">TELESCOPE QUIZ</a></h3>
              <p>A fun quiz about the James Webb Telescope.</p>
            </div>
            <div className="col">
              <img src={readme} className="rounded" style={{ width: "70%", height: "80%" }} alt="cover" />
              <h3><a href="https://github.com/tyarchy/readme-maker-plus/">README MAKER+</a></h3>
              <p>Need a markdown readme made fast?<br></br> Try this app.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
}
export default Portfolio;
