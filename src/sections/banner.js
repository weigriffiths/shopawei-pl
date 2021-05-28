/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Flex, Box, Heading, Input, Text, Image, Button } from 'theme-ui';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'components/link';
import { FaPlayCircle } from 'react-icons/fa';
import BannerThumb from 'assets/banner-thumb.png';

import client1 from 'assets/sponsor/paypal.svg';
import client2 from 'assets/sponsor/google.svg';
import client3 from 'assets/sponsor/dropbox.svg';

const data = [
  {
    id: 1,
    path: '#',
    image: client1,
    title: 'paypal',
  },
  {
    id: 2,
    path: '#',
    image: client2,
    title: 'google',
  },
  {
    id: 3,
    path: '#',
    image: client3,
    title: 'dropbox',
  },
];

export default function Banner() {
  // const [videoOpen, setVideoOpen] = useState(false);
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setVideoOpen(true);
  // };

  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox} data-aos="fade-right">
          <Heading as="h3" variant="heroPrimary">
            Groceries delivered in <em>10 minutes</em>.
          </Heading>
          <Text as="p" variant="heroSecondary">
            The ultimate shopping experience. We deliver groceries to you at your
            convenience.
          </Text>
          {/* <Text as="p" variant="heroPromo">
          Be the first to get the app and get 50 zł off your first order and 
          also be in the running to win 500zł of free groceries!
          </Text> */}
          <Box as="form" sx={styles.banner.form} data-aos="fade-right">
              <Box as="label" htmlFor="subscribe" variant="styles.srOnly">
                Get Invite
              </Box>
              <Input
                type="email"
                name="subscribe"
                id="subscribe"
                placeholder="Email me when it's ready"
                sx={styles.banner.form.input}
              />
              <Button type="submit" variant="whiteButton" sx={styles.banner.form.button} aria-label="Join waitlist">
                Join waitlist
              </Button>
            </Box>
          {/* <Flex>
            <Button variant="whiteButton" aria-label="Get Started">
              Get Started
            </Button>
            <>
              <ModalVideo
                channel="youtube"
                isOpen={videoOpen}
                videoId="ZNA9rmDsYVE"
                onClose={() => setVideoOpen(false)}
              />
              <Button
                variant="textButton"
                aria-label="Watch Video"
                onClick={handleClick}
              >
                <FaPlayCircle /> Watch Video
              </Button>
            </>
          </Flex> */}
          {/* <Flex sx={styles.sponsorBox}>
            <Text sx={styles.sponsorTitle}>Sponsored by:</Text>
            <Box sx={styles.sponsorBox.sponsor}>
              {data.map((item, index) => (
                <Link path={item.path} key={`client-key${index}`}>
                  <Image src={item.image} alt={item.title} />
                </Link>
              ))}
            </Box>
          </Flex> */}
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
    // backgroundImage: `url(${BannerBG})`,
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
      // background: 'linear-gradient(to top, #FFB586 40%, transparent 40%)' //half highlight
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
        
        // cursor: 'pointer',
        fontSize: ['12px', null, null, null, 2, '16px'],
        // borderRadius: ['4px'],
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
    imageBox: {
      display: ['block', null, null, 'block'],
      justifyContent: 'center',
      transform: 'rotate(5deg) scale(.8)',
      zIndex: 1,
      ml: [0, null, null, 0, 0, 0, 0, 0],
      mr: [0, null, null, '-100px', '-80px', '-100px', '-100px', '0px'],
      mt: ['-70px', '-100px', null, '-150px', '-200px', '-200px', '-200px'],
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
