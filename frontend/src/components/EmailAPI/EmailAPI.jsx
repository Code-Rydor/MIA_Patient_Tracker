import sgMail from '@sendgrid/mail'

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: 'dcc.capstone2022@outlook.com', // Change to your recipient
  from: 'dcc3.capstone@outlook.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun12',
  text: '34and easy to do anywhere, even with Node.js',
  html: '<strong>56and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })



