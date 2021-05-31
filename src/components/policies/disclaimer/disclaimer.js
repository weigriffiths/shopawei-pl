/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';

const content = 
  {
    title: 'Wyłączenie odpowiedzialności',
    text: `Wszystkie informacje zawarte na tej stronie, opublikowane są w dobrej wierze, w celach informacji ogólnej oraz w celach promocyjnych. Shapawei jest nadal w trakcie tworzenia, zatem informacje ukazane na tej stronie mogą ulec zmianie w przyszłości. Wszelkie decyzje podjęte na podstawie informacji zawartych na tej stronie (Shopawei), przez użytkownika strony, podejmowane są na wyłączną odpowiedzialność użytkownika. W żadnym wypadku Shopawei nie będzie odpowiedzialna za straty wynikające z korzystania lub niemożności korzystania z tej strony. `,
  };

export default function Disclaimer() {
  return (
    <section>
      <Container>
        <h5 sx={styles.header}>{content.title}</h5>
        <p sx={styles.text}>{content.text}
          <span sx={styles.text}>
          W celu uzyskania informacji o gromadzeniu przez naszą firmę danych osobowych, zapoznaj się z naszą <a href="/privacy" sx={styles.link}>Polityką Prywatności</a>
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