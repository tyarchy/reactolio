import React from 'react';
import coverImage from "../../assets/cover/hogums.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';


function About() {
  return (
    <section className="my-5">
      <div class="row">
        <div className="col">        
          <img src={coverImage} className="img-fluid rounded-circle" style={{ width: "80%", height: "85%" }} alt="cover" />
        </div>
        <div className="col">
          <h2 className="my-6">I'm a budding full stack developer looking to expand my horizons.  I have decades of experience in pushing buttons and not afraid to get my hands dirty.  I'm mostly human and good on the business end of a shovel.  Check out my portfolio and send me message.  </h2>
        </div>
      </div>
    </section>
  );
}

export default About;