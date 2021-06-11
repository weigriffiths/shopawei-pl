const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const { email } = req.body;

  if (!email) {
    // 5. Throw an error if an email wasn't provided.
    return res.status(400).json({ error: 'E-mail jest potrzebny' });
  }

  try {
    const message = {
      to: email,
      from: 'waitlist@shopawei.pl',
      subject: 'Dzięki za dołączenie do nas 🎉 ',
      text: 'Dziękujemy Ci za zainteresowanie Shopawei. Bardzo cenimy Twój czas, poświęcony wsparciu naszego biznesu.',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      // text: message,
      // html: `<p>${message}</p>`,
    };

  } catch(error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
}
