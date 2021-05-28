/** @jsx jsx */
import { jsx, Heading, Box, Container, Text } from 'theme-ui';
import { Link } from 'components/link';
import BannerBG from 'assets/bannerBg.png';

export default function Privacy() {
  return (
    <section sx={styles.banner} >
      <Container sx={styles.heading}>
        <Heading as="h3" variant="heroPrimary">Shopawei Privacy Policy</Heading>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    overflow: ['hidden', 'initial', null, 'hidden'],
    backgroundImage: `url(${BannerBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
    pt: '150px',
    pb: ['150px', null, null, '130px', '150px', '150px', '150px'],
    backgroundColor: 'primary',
  },
  heading: {
    textAlign: 'center',
  }
}