/** @jsx jsx */
import { jsx, Container, Flex, Box, Input, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link, animateScroll } from 'react-scroll';
import Logo from 'components/logo';
import LogoDark from 'assets/logo-dark.svg';
import LogoWhite from 'assets/logo.svg';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';

export default function Header({ className }) {

  const goToForm = (e) => {
    animateScroll.scrollToTop();
    // ReactDOM.findDOMNode
    // const textElem = document.querySelector('#subscribe')
    // console.log(textElem)

  }

  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo src={className === 'sticky' ? LogoDark : LogoWhite} />

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              <Link
                activeClass="active"
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
              >
                {label}
              </Link>
            ))}
          </Flex>

          <Button
            className="donate__btn"
            variant="secondary"
            aria-label="Join waitlist"
            onClick={goToForm}
          >
            Join waitlist
          </Button>

          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }
  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    width: '100%',
    color: 'white',
    fontWeight: 'normal',
    py: 4,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.5s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      display: ['none', null, null, null, 'block'],
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
    },
    '&.sticky': {
      // display: ['none', null, null, null, 'block'],
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: 'rgb(25 28 31 / 4%) 0px 8px 16px, rgb(25 28 31 / 4%) 0px -1px 0px',
      py: 3,
      'nev > a': {
        color: 'text',
      },
      '.donate__btn': {
        borderColor: 'none',
        backgroundColor:'primary',
        color: 'white',
        '&:hover': {
          boxShadow: 'rgba(31, 62, 118, 0.57) 0px 9px 20px -5px',
          backgroundColor: 'primary',
          color: 'white',
        },
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontStyle: "Inter",
      fontSize: '16px',
      fontWeight: '500',
      // textTransform: 'uppercase',
      px: 25,
      cursor: 'pointer',
      lineHeight: '1.2',
      '&.active': {
        color: 'tertiary',
      },
    },
  },
  
};
