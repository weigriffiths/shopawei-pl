/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'Is the app available now?',
    contents: (
      <div>
        We are currently in pre-alpha, which means that the app is still in development. 
        However, we aim to make the app available as soon as possible so that you can 
        enjoy the full benefits of online grocery shopping. Stay tuned by email for updates! 🙂 
      </div>
    ),
  },
  {
    title: 'Will this be available in my city?',
    contents: (
      <div>
        We will be rolling out the app in selected cities in order to control the development 
        of the app and give customers the best experience as possible. We care about customer
        satisfaction and so we want our service to be fully ready for our customers when we 
        launch.
      </div>
    ),
  },
  {
    title: `What is on-demand grocery delivery?`,
    contents: (
      <div>
        On-demand grocery delivery is a service that aims to provide groceries to customers as 
        fast as possible. It adopts a tech-first approach as opposed to the traditional supermarket
        method of in-store shopping. We aim to revolutionise shopping by putting the customer first, saving 
        you time and money by taking away the pain of shopping.
      </div>
    ),
  },
  {
    title: `Why choose you?`,
    contents: (
      <div>
        Like many people, we have found that grocery shopping is more of a chore than something we 
        would like to do. There are many times when it is not convenient to go to the supermarket. 
        For example, we are missing a key ingredient of a dish, or we are hosting a party and can't leave. 
        Suddenly, going to the supermarket suddenly becomes a hassle. Wasting your time travelling and shopping 
        made us realise that there had to be an easier, modern 21st-century approach. This is the idea of Shopawei.
      </div>
    ),
  },
  {
    title: `Is there a minimum spend?`,
    contents: (
      <div>
        There is currently no minimum spend.
      </div>
    ),
  },
  {
    title: `Will there be any extra fees?`,
    contents: (
      <div>
        In order to pay our riders and packers fairly for the amazing work they do, and keep up the high standard of service 
        that we provide to you, we will be charging a flat service fee of 10zł. There will be no delivery fees. 
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
            title="Frequently Asked Questions"
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
