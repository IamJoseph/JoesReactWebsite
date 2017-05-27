import React from 'react';
import PropTypes from 'prop-types';
import { Container, LI, Link } from './ButtonsStyled';

export default function Buttons({ active }) {
  return (
    <Container>
      <LI color="198" active={active === '/work'} topRadius>
        <Link to="/work">Jobs</Link>
      </LI>
      <LI color="183" active={active === '/work/projects'}>
        <Link to="/work/projects">Projects</Link>
      </LI>
      <LI color="155" active={active === '/work/current_site'}>
        <Link to="/work/current_site">Current Site</Link>
      </LI>
      <LI color="97" active={active === '/work/client_sites'}>
        <Link to="/work/client_sites">Client Sites</Link>
      </LI>
      <LI color="65" active={active === '/work/graphics'} bottomRadius boxShadow>
        <Link to="/work/graphics">Graphics</Link>
      </LI>
    </Container>
  );
}

Buttons.propTypes = {
  active: PropTypes.string.isRequired,
};
