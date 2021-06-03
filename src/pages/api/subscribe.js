const mailchimp = require("@mailchimp/mailchimp_marketing");

// 1. Fetch the environment variables.
const LIST_ID = process.env.MAILCHIMP_LIST_ID; 
const API_KEY = process.env.MAILCHIMP_API_KEY;
// 2. API keys are in the form <key>-us6.
const DATACENTER = API_KEY.split('-')[1];

// 3. Set Config File for Mailchimp
mailchimp.setConfig({
  apiKey: API_KEY,
  server: DATACENTER,
});

export default async (req, res) => {
  // TESTING MAILCHIMP SERVER 
  // const response = await mailchimp.ping.get();
  // console.log(response);
  // 4. Destructure the email address from the request body.
  const { email } = req.body;

  if (!email) {
    // 5. Throw an error if an email wasn't provided.
    return res.status(400).json({ error: 'E-mail jest potrzebny' });
  }
  try {

    // 6. The status of 'subscribed' is equivalent to a double opt-in.
    const data = {
      email_address: email,
      status: 'subscribed',
    };

    const response = await mailchimp.lists.addListMember(LIST_ID, data);
    
    // 7. Swallow any errors from Mailchimp and return a better error message.
    if (response.status >= 400) {
      return res.status(400).json({
        error: `Wystąpił błąd podczas zapisywania się do newslettera. Aby się zarejestrować, wyślij e-mail na adres support@shopawei.pl.`,
      });
    }

    // 8. If we made it this far, it was a success! 🎉
    return res.status(201).json({ success: 'email uploaded' });

  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  
};