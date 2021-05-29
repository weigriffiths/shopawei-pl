/** @jsx jsx */
import { jsx, Container, Flex, Box, Input, Button, Text } from 'theme-ui';

export default function StickyForm({ className }) {
  return (
    <>
      <div sx={styles.stickyBox}>
        <Text as="p" sx={styles.infoText} >
          Wpisz swój adres email w polu poniżej, powiadomimy Cię, kiedy aplikacja będzie gotowa
        </Text>
        <div sx={styles.stickyForm}>
        <Box as="form" sx={styles.form}>
          <Box as="label" htmlFor="subscribe" variant="styles.srOnly">
            Powiadom mnie
          </Box>
          <Input
            name="subscribe"
            id="subscribe"
            placeholder="Twój adres email..."
            sx={styles.form.input}
          />
          <Button type="submit" variant="primary" sx={styles.inviteBtn} aria-label="Powiadom mnie">
            Powiadom mnie
          </Button>
          </Box>
        </div>
      </div>
    </>
  );
}

const styles = {
  stickyBox: {
    zIndex: 2000,
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'background',
    color: '#000000',
    boxShadow: 'rgb(25 28 31 / 4%) 0px -8px 16px, rgb(25 28 31 / 4%) 0px 1px 0px',
  },
  stickyForm: {
    display: ['flex', null, null, null, 'none'],
    justifyContent: 'center',
    alignItems: 'center',
    pb: 3,
  },
  infoText: {
    display: ['block', null, null, null, 'none'],
    fontSize: '.65rem',
    color: 'primary',
    my: 1
  },
  form: {
    zIndex:2,
    display: ['flex'],
    input: {
      borderRadius: ['4px'],
      backgroundColor: 'white',
      width: ['200px', '300px', null, null, '315px', null, '375px'],
      height: ['40px', null, null, '45px', null, '50px', '55px'],
      padding: ['0 15px', null, null, '0 25px'],
      fontSize: [1, null, null, 2],
      // border: '1px solid',
      outline: 'none',
      boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)',
    },
  },
  inviteBtn: {
    ml: '10px'
  }
}




