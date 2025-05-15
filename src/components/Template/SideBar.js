import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Marcelo Mancini</h2>
        <p>
          <a href="mailto:msnmancini@hotmail.com">msnmancini@hotmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Marcelo. I am a game developer, which provides service
        work HTML5, Phaser and PIXI.js games. I&apos;m also experienced with game engines.
        2-times speaker at DConf.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Marcelo Mancini <Link to="/">mrcsnm.github.io</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
