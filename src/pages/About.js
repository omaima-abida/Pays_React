import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

const About = () => {
  return (
    <div>
      <Logo/>
      <Navigation />
      <h1>A propos</h1>
      <br />
      <p>
      <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
        purus a nulla scelerisque commodo. Nullam eget neque vitae libero
        congue suscipit. Ut pharetra aliquet eros in dapibus. Sed nec arcu id
        elit malesuada fermentum.
        <br />
      </p>

      <br />
      <p>
        Nunc vestibulum, lectus a pretium euismod, dolor leo laoreet tortor,
        vitae congue lectus ex vel justo. Sed quis tincidunt metus. Quisque
        euismod, elit eu iaculis malesuada, arcu ante tincidunt urna, vel
        vulputate erat justo a justo.
      </p>
      <br />
    </div>
  );
};

export default About;
