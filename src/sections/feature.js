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
    title: 'Dostosowana lista zakupów',
    text:
      'Używając ulepszonej sztucznej inteligencji, dostosujemy listę zakupów dla Ciebie.',
    animation: 'fade-up',
    delay: "200"
  },
  {
    id: 2,
    imgSrc: Checkout,
    altText: 'Checkout',
    title: 'Szybka obsługa',
    text:
      'W zaledwie trzech krokach zamówisz zakupy i zostaną one dostarczone prosto do Ciebie.',
    animation: 'fade-up',
    delay: "300"
  },
  {
    id: 3,
    imgSrc: Budget,
    altText: 'Budget',
    title: 'Udogodnienia dla budżetu',
    text:
      'Kontroluj swoje wydatki. Wiedz dokładnie ile i kiedy przeznaczyłeś na zakupy dzięki naszym monitorującym budżet narzędziom.',
    animation: 'fade-up',
    delay: "400"
  },
  {
    id: 4,
    imgSrc: Secure,
    altText: 'Secure',
    title: 'Bezpieczne płatności',
    text:
      'Wszystkie Twoje dane są zaszyfrowane wysokiej jakości szyfrem blokowym  AES-256, spełniającym standardy wojskowe. ',
    animation: 'fade-up',
    delay: "200"
  },
  {
    id: 5,
    imgSrc: Schedule,
    altText: 'Schedule',
    title: 'Zaplanowane dostawy',
    text:
      'Ty mówisz nam co i kiedy chcesz nawet z miesięcznym wyprzedzeniem.',
    animation: 'fade-up',
    delay: "300"
  },
  {
    id: 6,
    imgSrc: Chat,
    altText: 'Support',
    title: 'Wsparcie klienta',
    text:
      'Jesteśmy przyszłością robienia zakupów i zaczyna się to od Ciebie. Łatwo się z nami kontaktuj gdziekolwiek, kiedykolwiek chcesz.',
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
            slogan="CECHY JAKOŚCIOWE"
            title="Właściwości zaprojektowane dla Ciebie"
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
