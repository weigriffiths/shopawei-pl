/** @jsx jsx */
import { jsx, Heading, Box, Container, Text } from 'theme-ui';
import { Link } from 'components/link';
import privacyData from './privacy.data'

export default function Privacy() {
  return (
    <>
      <section sx={styles.policy}>
        <Container sx={styles.doc}>
          <Box sx={styles.doc.version}>
            <Text as="p">Wersja 1.0 - 1 Jun 2021</Text>
            <Heading sx={styles.doc.title}>Polityka Prywatności Shopawei</Heading>
            <Text as="h3" sx={styles.doc.subtitle}>Polityka prywatności opisuje zasady przetwarzania przez nas informacji na Twój temat, w tym danych osobowych oraz ciasteczek, czyli tzw. cookies.</Text>
          </Box>
          <Box sx={styles.doc.box}>
            {privacyData.map(({header, info}, i) => (
              <Box>
                <Heading sx={styles.doc.heading}>{header}</Heading>
                <nav>
                  {info.map(({point, extras}, i) => (
                    extras ? 
                    (<ul><li>{point}<ul>{extras.map((text, info) => (
                      <li>{text}</li>
                    ))}</ul></li></ul>) :
                    (<ul><li>{point}</li></ul>)
                  ))}
                </nav>
              </Box>
            ))}
            <Box sx={styles.doc.links}>
                <ul>
                  <li><a href="https://support.microsoft.com/pl-pl/help/10607/microsoft-edge-view-delete-browser-history">Edge</a></li>
                  <li><a href="https://support.microsoft.com/pl-pl/help/278835/how-to-delete-cookie-files-in-internet-explorer">Internet Explorer</a></li>
                  <li><a href="http://support.google.com/chrome/bin/answer.py?hl=pl&amp;answer=95647">Chrome</a></li>
                  <li><a href="http://support.apple.com/kb/PH5042">Safari</a></li>
                  <li><a href="http://support.mozilla.org/pl/kb/W%C5%82%C4%85czanie%20i%20wy%C5%82%C4%85czanie%20obs%C5%82ugi%20ciasteczek">Firefox</a></li>
                  <li><a href="http://help.opera.com/Windows/12.10/pl/cookies.html">Opera</a></li>
                </ul>
                <p>Urządzenia mobilne:</p>
                <ul>
                  <li><a href="http://support.google.com/chrome/bin/answer.py?hl=pl&amp;answer=95647">Android</a></li>
                  <li><a href="http://support.apple.com/kb/HT1677?viewlocale=pl_PL">Safari (iOS)</a></li>
                  <li><a href="http://www.windowsphone.com/pl-pl/how-to/wp7/web/changing-privacy-and-other-browser-settings">Windows Phone</a></li>
                </ul>
            </Box>
          </Box>
        </Container>
      </section>
    </>
  );
}

const styles = {
  policy: {
    pt: '96px',
    pb: '48px',
    backgroundColor: 'grey',
    height: '100%'
  },
  doc: {
    backgroundColor: 'white',
    borderRadius: '1.5rem',
    padding: '20px',
    version: {
      fontSize: '0.7rem'
    },
    title: {
      mt: '20px',
      textAlign: 'center',
      color: 'heading_secondary'
    },
    subtitle: {
      textAlign: 'center',
      color: 'heading_secondary'
    },
    box: {
      pt: '40px',
      fontSize: '.8rem'
    },
    heading: {
      fontSize: '1rem',
      color: 'heading_secondary',
      textTransform: 'uppercase'
    },
    links: {
      pl: '40px'
    }
  }
}