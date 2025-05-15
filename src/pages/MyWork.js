import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/my-work';

const MyWork = () => (
  <Main title="My Work" description="Learn about Marcelo Mancini's projects.">
    <article className="post" id="my-work">
      <header>
        <div className="title">
          <h2>
            <Link to="/my-work">My Work</Link>
          </h2>
          <p>My Work on the game studios I&apos;ve worked with</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell data={project} key={project.title} />
      ))}
    </article>
  </Main>
);

export default MyWork;
