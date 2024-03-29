/** @jsx jsx */
import { jsx, Container, Box, Grid, Text, Heading } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import CoreFeatureThumb from 'assets/coreFeature.png';
import UserInterface from 'assets/core-feature/UI.svg';
import Tracking from 'assets/core-feature/tracking.svg';

const data = {
  subTitle: 'PODSTAWOWE MOŻLIWOŚCI',
  title: 'Przenosimy robienie zakupów do 21 wieku',
  features: [
    {
      id: 1,
      imgSrc: UserInterface,
      altText: 'Seamless',
      title: 'Stabilny interfejs użytkownika',
      text:
        'Aplikacja jest tak prosta i łatwa w obsłudze, że zakupy będą w drodze do Ciebie po zaledwie trzech kliknięciach.',
      animation: 'fade-left',
      delay: '200'
    },
    {
      id: 2,
      imgSrc: Tracking,
      altText: 'Real Time Tracking',
      title: 'Śledzenie zamówienia w czasie rzeczywistym',
      text:
        'Śledź Twoje zamówienie w czasie rzeczywistym, by wiedzieć dokładnie kiedy zostanie dostarczone.',
      animation: 'fade-left',
      delay: '250'
    },
  ],
};

export default function CoreFeature() {
  return (
    <section id="features" sx={{variant: 'section.coreFeature'}}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image sx={styles.trackImage} src={CoreFeatureThumb} alt="Thumbnail" />
        </Box>
        <Box sx={styles.contentBox}>
          <Box sx={styles.headingTop}>
            <div data-aos="fade" data-aos-delay="100">
              <TextFeature subTitle={data.subTitle} title={data.title}/>
            </div>
          </Box>

          <Grid gap="15px 0" columns={1} sx={styles.grid}>
            {data.features.map((item) => (
              <Box sx={styles.card} key={item.id} data-aos="fade-up">
                <Image src={item.imgSrc} alt={item.altText} sx={styles.img} />

                <Box sx={styles.wrapper}>
                  <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                  <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: ['column', null, null, 'row'],
  },
  thumbnail: {
    pl: [0, 0, 0, null, 7, 95],
    pr: [0, 0, null, null, null, 75, 95],
    order: [2, null, null, 0],
  },
  trackImage: {
    transform: ['scale(1.1)',null,null,'scale(1.1)', 'scale(1.2)'],
    // mt: ['30rem', '25rem', null, '15rem', '12rem'],
    // mb: ['-25rem', null, null, '-20rem', '-20rem'],
  },
  contentBox: {
    width: ['100%', 450, 550, 350, 500, 570],
    pr: [0, null, 'auto', null, null, 80],
    pl: 'auto',
    flexShrink: 0,
  },
  headingTop: {
    pl: [0, null, null, null, '35px', null, '55px', 6],
    mb: [3, null, null, null, 1],
    textAlign: ['center', null, null, 'left'],
  },
  grid: {
    p: ['0 0px 35px', null, null, null, '0 20px 40px', null, '0 40px 40px', 0],
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    p: [
      '0 17px 20px',
      null,
      null,
      '0 0 20px',
      '20px 15px 17px',
      null,
      null,
      '25px 30px 23px',
    ],
    backgroundColor: 'white',
    borderRadius: '10px',
    transition: 'all 0.3s',
    width: ['100%', '85%', null, '100%'],
    mx: 'auto',
    '&:hover': {
      boxShadow: [
        '0px 0px 0px rgba(0, 0, 0, 0)',
        null,
        null,
        null,
        '0px 8px 24px rgba(69, 88, 157, 0.07)',
      ],
    },
  },

  img: {
    width: ['50px', null, '55px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, 4],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, 2],
    },
  },
};
