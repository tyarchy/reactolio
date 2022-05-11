import React from 'react';
import coverImage from "../../assets/cover/hogums.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';


function About() {
  return (
<section className="my-5">
<div class="row">
        <div className="col">
  <h1>Its
   downhill from here!</h1>
  <img src={coverImage} className="img-fluid rounded-circle" style={{ width: "60%", height: "%30" }} alt="cover" />
  </div>
  <div className="col">
    
  </div>
  </div>
  
</section>
  );
}

export default About;