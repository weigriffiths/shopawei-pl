/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'Czy aplikacja jest już dostępna?',
    contents: (
      <div>
        Jest obecnie w wersji roboczej, co znaczy, że aplikacja jest ciągle w budowie. Jednakże, dążymy by aplikacja była dostępna tak szybko, jak to tylko możliwe, abyście mogli cieszyć się pełnym zakresem korzyści, które niesie ze sobą robienie zakupów online. Sprawdzajcie pocztę e-mail by być na bieżąco! 🙂 
      </div>
    ),
  },
  {
    title: 'Czy usługa będzie dostępna w moim mieście?',
    contents: (
      <div>
        Będziemy wypuszczać aplikację w wybranych miastach, aby sprawnie kontrolować jej rozwój i zapewnić naszym klientom jak najlepsze doświadczenie. Zależy nam na zadowoleniu naszych klientów dlatego chcemy, aby nasza usługa była w pełni gotowa już od samego początku.
      </div>
    ),
  },
  {
    title: `Czym jest dostarczanie zakupów na życzenie?`,
    contents: (
      <div>
        Dostarczanie zakupów na życzenie jest usługą, której celem jest dostarczanie zakupów do klienta tak szybko, jak to możliwe. Używa ona podejścia tech-first w przeciwieństwie do tradycyjnej metody robienia zakupów. Naszym celem jest zrewolucjonizowanie robienia zakupów dzięki postawieniu klienta na pierwszym miejscu, zaoszczędzeniu jego pieniędzy i czasu niwelując tym samym trudy związane z robieniem zakupów.
      </div>
    ),
  },
  {
    title: `Dlaczego my?`,
    contents: (
      <div>
        Jak wiele osób uznaliśmy, że robienie zakupów jest bardziej przykrym obowiązkiem niż czymś co chcielibyśmy robić. Jest wiele sytuacji, w których zdecydowanie nie pasuje nam udać się do supermarketu. Na przykład, kiedy brakuje nam kluczowego składnika potrawy albo kiedy wydajemy przyjęcie i nie możemy opuścić gości. Niespodziewanie wyjście do supermarketu stało się kłopotem. Marnując czas na dojazd i robienie zakupów uznaliśmy, że musi istnieć łatwiejsze, współczesne podejście rodem z 21-go wieku. To jest właśnie idea Shopawei.
      </div>
    ),
  },
  {
    title: `Czy jest jakaś minimalna kwota zakupu?`,
    contents: (
      <div>
        Obecnie nie ma żadnej minimalnej kwoty zakupu.
      </div>
    ),
  },
  {
    title: `Czy będą jakieś dodatkowe opłaty?`,
    contents: (
      <div>
        Aby dobrze opłacić naszych kierowców i osoby pakujące za wspaniałą pracę, jaką wykonują i aby utrzymać wysokie standardy naszej usługi, będziemy doliczać stałą opłatę w wysokości 10zł. Nie będzie opłaty za dowóz. 
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section id="faq" sx={{ variant: 'section.faq' }}>
      <Container>
        <div data-aos="fade-up">
          <SectionHeader
            // slogan="Get "
            title="Najczęściej zadawane pytania"
            data-aos="fade-up"
          />
        </div>
        
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
