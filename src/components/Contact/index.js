import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



function ContactForm() {

    return (
        <section >
          <div class="row">
          
          <form id="contact-form">
            <h1>CONTACT ME</h1>
            <div>
              <label htmlFor="name"><p>NAME:</p></label>
              <input type="text" name="name" />
            </div>
            <div>
              <label htmlFor="email"><p>EMAIL:</p></label>
              <input type="email" name="email" />
            </div>
            <div>
              <label htmlFor="message"><p>MESSAGE:</p></label>
              <textarea name="message" rows="5" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        </section>
        );
    }
    
    export default ContactForm;
    
   