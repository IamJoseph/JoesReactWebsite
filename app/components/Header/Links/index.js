import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Container, Menu, MenuLink, UL, IMG, Button, Link } from './LinksStyled';
import menuIcon from '../../../assets/menu_icon.svg';

const activeDropdown = {
  backgroundColor: '#8aa3b6',
};

export default class Links extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  /* eslint-disable react/no-did-update-set-state */
  componentDidUpdate(prevProps, prevState) {
    if (prevState.open) {
      this.setState({ open: false });
    }
  }

  clickHandler = () => {
    this.setState({ open: true });
  }

  render() {
    return (
      <Container>
        <Helmet>
          <script type="application/ld+json">
            {`
              {
                  "@context": "http://schema.org",
                  "@type": "Organization",
                  "name": "Joseph Ireland",
                  "url": "https://www.joeireland.com",
                  "logo": "https://www.joeireland.com/d695e9d11a028511bb06553bfca19888.svg"
              }
            `}
          </script>
        </Helmet>
        <Menu>
          <Button>
            <IMG onClick={this.clickHandler} src={menuIcon} alt="hamburger menu icon" />
          </Button>
          <UL className={!this.state.open && 'hide'}>
            <MenuLink exact activeStyle={activeDropdown} to="/">Home</MenuLink>
            <MenuLink activeStyle={activeDropdown} to="/work">Work</MenuLink>
            <MenuLink activeStyle={activeDropdown} to="/contact">Contact</MenuLink>
          </UL>
        </Menu>
        <Link exact activeClassName="active" to="/">Home</Link>
        <Link activeClassName="active" to="/work">Work</Link>
        <Link activeClassName="active" to="/contact">Contact</Link>
      </Container>
    );
  }
}
