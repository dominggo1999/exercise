import React from 'react';
import { Container } from 'react-bootstrap';
import {
  FaTwitter, FaTwitch, FaYoutube, FaLinkedin, FaGithub,
} from 'react-icons/fa';
import TypingEffect from './TypingEffect';

const Header = () => {
  return (
    <section className="hero">
      <Container>
        <div className="hero__content">
          <h1 className="hero__name">
            Alica Wildman
          </h1>
          <h3 className="hero__desc">I’m a {' '}
            <TypingEffect words={['developer', 'designer', 'freelancer']} />
          </h3>
        </div>
        <div className="hero__language">
          <p>ENG</p>
          <p>FRA</p>
        </div>
        <div className="hero__social-media">
          <FaTwitter />
          <FaTwitch />
          <FaYoutube />
          <FaLinkedin />
          <FaGithub />
        </div>
      </Container>
    </section>
  );
};

export default Header;
