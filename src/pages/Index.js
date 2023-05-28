import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Seonwoo Kim's Website."
    + 'Student of SungKyunKwan University, colleage of Computing and Informatics'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>
            Seonwoo Kim&apos;s Website
          </p>
        </div>
      </header>
      <p>
        Welcome to SeonWoo Kim&apos; website.
        There is no any resume, projects in here.
      </p>
      <p>
        However, you can aware a rising star of computer science.
        Please goto ABOUT section.
      </p>
    </article>
  </Main>
);

export default Index;
