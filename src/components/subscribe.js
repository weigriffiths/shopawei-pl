/** @jsx jsx */
import { useRef, useState } from 'react';
import { jsx } from 'theme-ui';
import { Flex, Button, Input, Box, Text } from 'theme-ui';

export default function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a status in state to handle the response from our API.
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleMailChimpResponse = (errorMsg, successMsg) => {
    if (errorMsg) {
      // 4. If there was an error, update the message in state.
      setStatus({
        info: { error: true, msg: errorMsg },
      });

      return;
    }

    // 5. Clear the input value and show a success message.
    setStatus({
      submitted: true,
      submitting: false,
      info: { error: false, msg: successMsg },
    });
    // inputEl.current.value = '';
  };

  // const handleSendGridResponse = (status, msg) => {
  //   if (status === 200) {
  //     // 5. Clear the input value and show a success message.
  //     setStatus({
  //       submitted: true,
  //       submitting: false,
  //       info: { error: false, msg: msg },
  //     });
  //     inputEl.current.value = '';
  //   } else {
  //     setStatus({
  //       info: { error: true, msg: msg },
  //     });
  //   }
  // };

  const subscribe = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    //for mailChimp integration
    const { error } = await res.json();
    handleMailChimpResponse(
      error,
      'Success! 🎉 You are now subscribed to the newsletter.'
    );
    // For sendGrid integration
    // const text = await res.text();
    // handleSendGridResponse(res.status, text);
  };

  return (
    <div className="subscribe__area">
      {!status.submitted ? (
        <>
          <Box data-aos="fade-right">
            <Text as="p" sx={styles.infoText} >
              Wpisz swój adres email w polu poniżej, powiadomimy Cię, kiedy aplikacja będzie gotowa
            </Text>
          </Box>
          <form onSubmit={subscribe}>
            <Flex sx={styles.subscribeForm}>
              <label htmlFor="email" sx={{ variant: 'styles.srOnly' }}>
                Powiadom mnie
              </label>
              <Input
                ref={inputEl}
                id="email"
                name="email"
                type="email"
                placeholder="Twój adres email..."
              />

              <div>
              </div>
              <Button
                sx={styles.subButton}
                type="submit"
                disabled={status.submitting}
                variant="whiteButton"
                aria-label="Powiadom mnie"
              >
                Powiadom mnie
              </Button>
            </Flex>
          </form>
          <Box sx={styles.statusError}>
            {status.info.error && (
                <div className="error">Komunikat błędu: {status.info.msg}</div>
              )}
              {!status.info.error && status.info.msg && (
                <div className="success">{status.info.msg}</div>
            )}
          </Box>
        </>
      ) : (
        <Box data-aos="fade">
          <Text as="p" sx={styles.successText} >
            Dziękujemy za zainteresowanie 😎, wkrótce otrzymasz od nas email.
          </Text>
        </Box>
      )}
    </div>
  );
}

const styles = {
  infoText: {
    display: ['none', null, null, 'block'],
    fontSize: '.65rem',
    color: 'white',
    mb: '10px'
  },
  subscribeForm: {
    width: '100%',
    mb: ['30px', null, null, null, null, '60px'],
    zIndex:2,
    display: ['none', null, null, 'flex'],
    '[type="email"]': {
      borderRadius: ['4px'],
      backgroundColor: 'white',
      width: ['200px', '300px', null, null, '315px', null, '375px'],
      height: ['40px', null, null, '45px', null, '50px', '55px'],
      padding: ['0 15px', null, null, '0 25px'],
      fontSize: [1, null, null, 2],
      border: 'none',
      outline: 'none',
      boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)',
  },
  subButton: {
    fontSize: ['12px', null, null, null, 2, '16px'],
    padding: ['0 15px'],
    ml: ['10px'],
    width: ['90px', null, null, null, '180px'],
  },
  },
  successText: {
    mt: '-30px',
    color: 'tertiary',
    fontSize: [2, 3, 4, '17px', 3, 3, 4, 4],
    lineHeight: [2, null, null, null, 2.2],
    fontWeight: 'body',
  },
  statusError: {
    mt: '-7rem',
    '.error': {
      color: 'error'
    }
  }
};

{/* {!status.submitting
                ? !status.submitted
                  ? 'Powiadom mnie'
                  : 'Submitted'
                : 'Submitting...'} */}