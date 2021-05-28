/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Custom from 'assets/feature/custom.svg';
import Checkout from 'assets/feature/checkout.svg';
import Budget from 'assets/feature/budget.svg';
import Secure from 'assets/feature/secure.svg';
import Schedule from 'assets/feature/schedule.svg';
import Chat from 'assets/feature/chat.svg';

const data = [
  {
    id: 1,
    imgSrc: Custom,
    altText: 'Custom',
    title: 'Custom Shopping List',
    text:
      'Using enhanced artificial intelligence, we customise shopping lists for you.',
    animation: 'fade-up',
    delay: "200"
  },
  {
    id: 2,
    imgSrc: Checkout,
    altText: 'Checkout',
    title: 'Quick Checkout',
    text:
      'In as little as three steps, you can checkout and have your groceries delivered straight to you.',
    animation: 'fade-up',
    delay: "300"
  },
  {
    id: 3,
    imgSrc: Budget,
    altText: 'Budget',
    title: 'Budget Tools',
    text:
      'Be in control of your data. Know exactly what you have spent on groceries and when with our budget breakdown tools.',
    animation: 'fade-up',
    delay: "400"
  },
  {
    id: 4,
    imgSrc: Secure,
    altText: 'Secure',
    title: 'Secure Payments',
    text:
      'All of your data is encrypted with military grade AES-256 bit encryption. ',
    animation: 'fade-up',
    delay: "200"
  },
  {
    id: 5,
    imgSrc: Schedule,
    altText: 'Schedule',
    title: 'Scheduled Deliveries',
    text:
      'You tell us what you want and when up to a month in advance.',
    animation: 'fade-up',
    delay: "300"
  },
  {
    id: 6,
    imgSrc: Chat,
    altText: 'Support',
    title: 'Customer Support',
    text:
      'We are the future of grocery shopping and that starts with you. Easily chat with us whenever, wherever.',
    animation: 'fade-up',
    delay: "400"
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <div data-aos="fade-up">
          <SectionHeader
            slogan="Quality features"
            title="Features Designed For You"
          />
        </div>

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
              dataAos={item.animation}
              dataAosDelay={item.delay}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
