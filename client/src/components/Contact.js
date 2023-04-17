import React from "react";
import { Container } from "react-bootstrap";

import "../styles/contact.css";

const Contact = () => {
  return (
    <>
      <Container>
        <div style={{ paddingBottom: "3rem" }}>
          <div className="content">
            <img alt='Flowers' src="https://images.squarespace-cdn.com/content/v1/52594417e4b030e5f06cf43c/1383138035490-JPI2GOQ51TBRHJAPH65G/IMG_9116+%281%29.JPG?format=1000w"></img>
            <p>
              We can't wait to hear from you!
              <br />
              For customer service, wholesale and press enquiries,
              <br /> please contact{" "}
              <a href="mailto:hello@floandtheo.com" style={{ color: "#0062cc" }}>hello@floandtheo.com</a>

            </p>
          </div>
          <form
            id="contactForm"
            action="https://formsubmit.co/7731e0b8bd4627ebf6771973e1ac458d"
            method="POST"
          >
            <div className="flName">
              <div>
                <input type="text" placeholder="First Name" name="FirstName" />
              </div>
              <div style={{ width: "2rem" }}></div>
              <div>
                <input type="text" placeholder="Last Name" name="LastName" />
              </div>
            </div>
            <input type="text" placeholder="Email Address" name="email" />
            <input type="text" placeholder="Subject" name="subject" />
            <textarea
              placeholder="Type your message here"
              rows="4"
              cols="100"
              name="comment"
              form="contactForm"
            ></textarea>
            <button className="btn-primary-outline px-3" type="submit">
              Submit
            </button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Contact;
