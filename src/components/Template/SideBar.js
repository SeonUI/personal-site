import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../../data/about.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      });
  });

  return (
    <section id="sidebar">
      <section id="intro">
        <Link to="/" className="logo">
          <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
        </Link>
        <header>
          <h2>kim Seonwoo</h2>
          <p><a href="mailto:ksw135468@gmail.com">ksw135468@gmail.com</a></p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>Hi, I&apos;m Seonwoo Kim.
          I am a student of <a href="https://skku.edu/">SungKyunKwan University</a>,
          enrolled colleage of Computing and Informatics.
          I have dream to become a skillful developer.
          Please watch me.
        </p>
        <Markdown>
          {markdown}
        </Markdown>
      </section>
      <div className="email-at">
        <h2>contact</h2>
        <p>You can email me at: </p>
        <p>ksw135468@gmail.com </p>
        <p>zxc135468@g.skku.edu </p>
        <p>And you can find my phone number with trying 10<sup>8</sup> times. </p>
      </div>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">&copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.</p>
      </section>
    </section>
  );
};
export default SideBar;
