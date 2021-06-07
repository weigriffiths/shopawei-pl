const sgMail = require('@sendgrid/mail');

// export default async function (req, res) {
//   sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//   const { email, message } = req.body;

//   const content = {
//     to: 'weilingriffiths@gmail.com',
//     from: 'waitlist@shopawei.pl',
//     subject: 'Sending with SendGrid is Fun',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//     // text: message,
//     // html: `<p>${message}</p>`,
//   };

//   try {
//     await sgMail.send(content);
//     res.status(200).send('Message sent successfully.');
//   } catch (error) {
//     console.log('ERROR', error);
//     res.status(400).send('Message not sent.');
//   }
// }


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const { email, message } = req.body;

const content = {
  to: 'weilingriffiths@gmail.com',
  from: 'waitlist@shopawei.pl',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  // text: message,
  // html: `<p>${message}</p>`,
};

try {
  sgMail.send(content).then(res => {
    console.log(res)
    // res.status(200).send('Message sent successfully.');
  })
  // res.status(200).send('Message sent successfully.');
} catch (error) {
  console.log('ERROR', error);
  // res.status(400).send('Message not sent.');
}