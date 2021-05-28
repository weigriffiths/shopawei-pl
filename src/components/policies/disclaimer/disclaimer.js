/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';

const content = 
  {
    title: 'Disclaimer',
    text: `All the information on this website is published in good faith and for general information and promotional purposes only. Shopawei is currently in development, so any information received on this website is likely to change in the future. Any action you take upon the information you find on this website (Shopawei), is strictly at your own risk. Shopawei will not be liable for any losses and/or damages in connection with the use of our website. 
    `,
  };

export default function Disclaimer() {
  return (
    <section>
      <Container>
        <h5 sx={styles.header}>{content.title}</h5>
        <p sx={styles.text}>{content.text}
          <span sx={styles.text}>
            To see how we collect information from you, visit our <a href="/privacy" sx={styles.link}>Privacy Policy</a>
          </span>
        </p>
      </Container>
    </section>
  );
}

const styles = {
  header: {
    fontSize: '.75rem',
  },
  text: {
    fontSize: '.75rem'
  },
  link: {
    color: 'muted'
  }
}