/** @jsx jsx */
import { jsx, Container, Flex, Box, Input, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';

export default function StickyForm({ className }) {
  return (
    <>
      <div sx={styles.stickyForm}>
          <Box as="form" sx={styles.form}>
            <Box as="label" htmlFor="subscribe" variant="styles.srOnly">
              Get Invite
            </Box>
            <Input
              name="subscribe"
              id="subscribe"
              placeholder="Email me when it's ready"
              sx={styles.form.input}
            />
            <Button type="submit" variant="primary" sx={styles.inviteBtn} aria-label="Get Invite">
              Get Invite
            </Button>
            </Box>
          {/* <Button
            className="donate__btn"
            variant="secondary"
            aria-label="Get Invite"
          >
            Get Invite
          </Button> */}
      </div>
    </>
  );
}

const styles = {
  stickyForm: {
    zIndex: 2000,
    position: 'fixed',
    display: ['flex', null, null, null, 'none'],
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    width: '100%',
    color: 'white',
    backgroundColor: 'background',
    color: '#000000',
    boxShadow: 'rgb(25 28 31 / 4%) 0px -8px 16px, rgb(25 28 31 / 4%) 0px 1px 0px',
    py: 3,
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




