import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Form from "./form";

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <footer id="contact">
      <div className=" footer-1">
        <Form />
      </div>
      <div className=" footer-2">
        <div className="div2">
          <div className="social-media">
            <a href="https://github.com/agboolaidris">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/idris-i-agboola-b24415190?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Be960e4be-281a-4927-b64b-8522911dc9fc">
              <i className="fab fa-linkedin-in fa-2x"></i>
            </a>
            <a href="/">
              <i className="fab fa-facebook-f fa-2x"></i>
            </a>
            <a href="/">
              <i className="fab fa-google-plus-g fa-2x"></i>
            </a>
            <a href="/">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
