import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      'Marcelo Mancini personal website. Hipreme Engine Developer and '
      + 'Javascript/Typescript HTML 5 games programmer.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About this site</Link>
          </h2>
          <p>
            A beautiful, responsive, statically-generated, react application
            written with modern Javascript.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
        or{' '}<Link to="/contact">contact</Link> me.
      </p>
      <p>
        {' '}
        For checking the kind of projects developed, check {' '}
        <Link to="/my-work">My Work Section</Link>. There&apos; examples which may not
        be playable since the lack of availability of the source code.
      </p>
    </article>
  </Main>
);

export default Index;
