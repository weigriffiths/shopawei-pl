/** @jsx jsx */
import { jsx, Container, Flex, Box, Input, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'components/link';
import Logo from 'components/logo';
import LogoDark from 'assets/logo-dark.svg';
import LogoWhite from 'assets/logo.svg';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';

export default function Header({ className }) {

  return (
    <DrawerProvider>
      <header sx={styles.header} className={className}>
        <Container sx={styles.container}>
          <Logo sx={styles.logo} src={LogoDark} />

          <Link
            path="/"
            className="join"
            variant="secondary"
            aria-label="Powiadom mnie"
          >
            Powiadom mnie
          </Link>

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
  logo:{
    height: 'auto'
  },
  header: {
    width: '100%',
    position: 'fixed',
    backgroundColor: 'background',
    color: '#000000',
    boxShadow: 'rgb(25 28 31 / 4%) 0px 8px 16px, rgb(25 28 31 / 4%) 0px -1px 0px',
    py: 2,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    '.join': {
        textDecoration: 'none',
        borderColor: 'none',
        backgroundColor:'primary',
        color: 'white',
        borderRadius: '.75rem',
        padding:'0.625em 1.5em',
        '&:hover': {
          boxShadow: 'rgba(31, 62, 118, 0.57) 0px 9px 20px -5px',
          backgroundColor: 'primary',
          color: 'white',
        },
      },
  },
};
