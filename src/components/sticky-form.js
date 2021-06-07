/** @jsx jsx */
import { useRef, useState } from 'react';
import { jsx, Container, Flex, Box, Input, Button, Text } from 'theme-ui';
import { useForm } from 'react-hook-form';
import { Mixpanel } from 'analytics/mixpanel';

// Handle Error Message rendering
const ErrorMessage = ({ message }) => {
  return (<Text as="p" sx={styles.error}>{message}</Text>)
}

// Handle Success Message rendering
const SuccessMessage = ({ message }) => {
  return (<Text as="p" sx={styles.successText} >{message}</Text>)
}

export default function StickyForm({ className }) {
  // 0. Utilise React Hook Form to reference input
  const { handleSubmit, register, formState: { errors } } = useForm();

  // 1. Create a reference to the input so we can fetch/clear it's value.
  // const inputEl = useRef(null);
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
    // e.preventDefault();
    // console.log(data.email)
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    try{
      // 3. Send a request to our API with the user's email address.
      const res = await fetch('/api/subscribe', {
        body: JSON.stringify({
          email: data.email,
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
      Mixpanel.track('Joined Waitlist');
    } catch(e) {
      Mixpanel.track('Unsuccessful Form Submission');
    }
    
  };

  return (
    <>
      <div sx={styles.stickyBox}>
        {!status.submitted ? (
          <>
            <Text as="p" sx={styles.infoText} >
              Wpiz swój adres email w polu poniżej, powiadomimy Cię, kiedy aplikacja będzie gotowa
            </Text>
            <div sx={styles.stickyForm}>
              <Box sx={styles.form}>
                <form onSubmit={handleSubmit(subscribe)}>
                  <Flex sx={styles.subscribeForm}>
                    <label htmlFor="email" sx={{ variant: 'styles.srOnly' }}>
                      Powiadom mnie
                    </label>
                    <Input
                      {...register('email', {
                        required: "Proszę podać adres e-mail",
                        pattern: {
                          value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                          message: "Wprowadź aktualny adres Email"
                        }
                      })}
                      sx={styles.form.input}
                      id="email"
                      type="email"
                      placeholder="Twój adres email..."
                    />
                    <Button
                      sx={styles.inviteBtn}
                      type="submit"
                      disabled={status.submitting}
                      variant="primary"
                      aria-label="Powiadom mnie"
                    >
                      Powiadom mnie
                    </Button>
                  </Flex>
                </form>
              </Box>
            </div>
            {errors?.email && <ErrorMessage message={errors.email.message}/>}
          </>
        ) : (
          <SuccessMessage message={'Dziękujemy za zainteresowanie 🎉, wkrótce otrzymasz od nas email.'} />
        )}
        
        
        {/* <Text as="p" sx={styles.infoText} >
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
        </div> */}
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
    fontSize: ['.5rem', '.65rem', null, null, null],
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
  },
  successText: {
    opacity: 1,
    py: 4,
    color: 'tertiary',
    fontSize: [1, 2, 2, null],
    lineHeight: [2, null, null, null, 2.2],
    transition: 'opacity 1s'
  },
  error: {
    color: 'error',
    fontSize: '16px',
    mt: -2
  }
}




