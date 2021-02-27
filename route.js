const Route = require("express").Router();
const nodemailer = require("nodemailer");
const mailgun = require("nodemailer-mailgun-transport");
//send mail
const SendMail = (message) => {
  const Auth = {
    auth: {
      api_key: process.env.MAILGUN_APIKEY,
      domain: process.env.MAILGUN_DOMAIN,
    },
  };
  const Tranporter = nodemailer.createTransport(mailgun(Auth));

  const mailOptions = {
    from: "Excited User <me@samples.mailgun.org>",
    to: process.env.EMAIL_TO,
    subject: "MESSAGE FROM PORTFOLIO",
    html: message,
  };

  const response = Tranporter.sendMail(mailOptions);

  console.log(response);
  return response;
};

Route.post("/", async (req, res) => {
  try {
    const { message, email, name } = req.body;
    const msg = `
      <h1>${name}  send you this below message via your porfolio website</h1>
       <p>${message}</>
       <P>you can response via ${email}</>
      `;
    const response = await SendMail(msg);
    if (!response) {
      return res.status(401).json({ msg: "error occur" });
    }
    res.json({ msg: "message send successful" });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = Route;
