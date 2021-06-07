/** @jsx jsx */
import { useRef, useState } from 'react';
import { jsx } from 'theme-ui';
import { Flex, Button, Input, Box, Text } from 'theme-ui';
import { Mixpanel } from 'analytics/mixpanel';
import { useForm } from 'react-hook-form';

// Handle Error Message rendering
const ErrorMessage = ({ message }) => {
  return (<Text as="p" sx={styles.error}>{message}</Text>)
}

// Handle Success Message rendering
const SuccessMessage = ({ message }) => {
  return (<Text as="p" sx={styles.successText} >{message}</Text>)
}

export default function Subscribe() {
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

    // 5. Show a success message.
    setStatus({
      submitted: true,
      submitting: false,
      info: { error: false, msg: successMsg },
    });
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

  const subscribe = async (data) => {
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

      Mixpanel.track('Joined Waitlist', {
        email: data.email,
      });

    } catch(e) {
      Mixpanel.track('Unsuccessful Form Submission', {
        error: e
      });
    }
    


    
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
                id="email"
                type="email"
                placeholder="Twój adres email..."
              />
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
          {errors?.email && <ErrorMessage message={errors.email.message}/>}
        </>
      ) : (
        <SuccessMessage message={'Dziękujemy za zainteresowanie 🎉, wkrótce otrzymasz od nas email.'} />
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
  },
  error: {
    color: 'error',
    fontSize: '18px',
    mt: -7
  }
};

{/* {!status.submitting
                ? !status.submitted
                  ? 'Powiadom mnie'
                  : 'Submitted'
                : 'Submitting...'} */}