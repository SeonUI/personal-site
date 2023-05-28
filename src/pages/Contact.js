import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Seonwoo Kim via email ksw135468@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>You can email me at: </p>
        <p>ksw135468@gmail.com </p>
        <p>zxc135468@g.skku.edu </p>
        <p>And you can find my phone number with trying 10<sup>8</sup> times. </p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
