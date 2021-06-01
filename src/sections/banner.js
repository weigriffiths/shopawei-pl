/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Flex, Box, Heading, Input, Text, Image, Button } from 'theme-ui';
import Subscribe from 'components/subscribe';
import BannerThumb from 'assets/banner-thumb.png';

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox} data-aos="fade-right">
          <Heading as="h3" variant="heroPrimary">
            Zakupy dostarczamy w <em>10 minut</em>.
          </Heading>
          <Text as="p" variant="heroSecondary">
            Gwarantowana satysfakcja z zakupów. Dostarczymy je do Ciebie ku Twojej wygodzie.
          </Text>
          <Subscribe />
        </Box>
        <Box sx={styles.banner.imageBox}>
          <Image src={BannerThumb} alt="banner" data-aos="fade" data-aos-delay="500"/>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    overflow: ['hidden', 'initial', null, 'hidden'],
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
    borderBottomRightRadius: [100, 150, null, null, null, 250],
    pt: ['150px', null, null, null, null, null, '140px', '130px'],
    pb: ['100px', null, null, '110px', null, 10, '150px'],
    backgroundColor: 'primary',
    container: {
      display: 'flex',
      flexWrap: ['wrap', null, null, 'nowrap']
    },
    highlight: {
      backgroundColor: 'tertiary'
    },
    form: {
      mb: ['30px', null, null, null, null, '60px'],
      zIndex:2,
      display: ['none', null, null, 'flex'],
      input: {
        borderRadius: ['4px'],
        backgroundColor: 'white',
        width: ['200px', '300px', null, null, '315px', null, '375px'],
        height: ['40px', null, null, '45px', null, '50px', '55px'],
        padding: ['0 15px', null, null, '0 25px'],
        fontSize: [1, null, null, 2],
        border: 'none',
        outline: 'none',
        boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)',
      },
      button: {
        fontSize: ['12px', null, null, null, 2, '16px'],
        padding: ['0 15px'],
        ml: ['10px'],
        width: ['90px', null, null, null, '180px'],
      },
    },
    contentBox: {
      width: ['100%', null, '85%', '55%', '50%', '55%'],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      flexShrink: 0,
      pt: [0, null, null, null, null, null, 5, 7],
    },
    infoText: {
      display: ['none', null, null, 'block'],
      fontSize: '.65rem',
      color: 'white',
      mb: '10px'
    },
    imageBox: {
      display: ['block', null, null, 'block'],
      justifyContent: 'center',
      transform: 'rotate(5deg) scale(.8)',
      zIndex: 1,
      ml: [0, null, null, 0, 0, 0, 0, 0],
      mr: [0, null, null, '-100px', '-80px', '-100px', '-100px', '0px'],
      mt: ['-50px', '-70px', null, '-100px', '-150px', '-150px', '-100px'],
      mb: [0, null, null, null, '-45px', '-70px', '-150px', '0px'],
      overflow: 'hidden',
      textAlign: 'right',
      width: '100%',
    },
  },
  sponsorTitle: {
    color: 'white',
    fontSize: [1, 2],
    opacity: 0.6,
    pr: 20,
    flexShrink: 0,
    pb: [2, null, 0],
  },
  sponsorBox: {
    pt: ['35px', null, null, null, null, '45px'],
    flexDirection: ['column', null, 'row'],
    sponsor: {
      display: 'flex',
      alignItems: 'center',
      '> a': {
        mr: [5, null, null, 4, 6],
        display: 'flex',
        '&:last-of-type': {
          mr: 0,
        },
      },
    },
  },
};
