/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Range from 'assets/key-feature/range.svg';
import Money from 'assets/key-feature/money.svg';
import Speed from 'assets/key-feature/speed.svg';

const data = [
  {
    id: 1,
    imgSrc: Speed,
    altText: 'Fast & Reliable',
    title: 'Fast & Reliable',
    text:
      'We will deliver groceries to you in as little as 10 minutes. ',
    animation: "fade-up",
    delay: "500"
  },
  {
    id: 2,
    imgSrc: Money,
    altText: 'Cost Saving',
    title: 'Save Money',
    text:
      'We will minimise your grocery spending and guarantee the lowest prices.',
    animation: "fade-up",
    delay: "600"
  },
  {
    id: 3,
    imgSrc: Range,
    altText: 'Product Selection',
    title: 'Product Selection',
    text:
      'We aim to offer a supermarket-like range of products to select from.',
    animation: "fade-up",
    delay: "700"
  },
];

export default function Promises() {
  return (
    <section sx={{ variant: 'section.promises' }} id="promises">
      <Container>
        <div data-aos="fade-up" data-aos-delay="300">
          <SectionHeader
            slogan="On-Demand Grocery Delivery"
            title="Our Promises To You"
          />
        </div>

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
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
    px: [0, null, null, '40px', null, '80px'],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['35px 0', null, '40px 0'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
};
