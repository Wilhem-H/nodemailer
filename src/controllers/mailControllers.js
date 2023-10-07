const nodemailer = require("nodemailer");
require("dotenv").config();

const sendContactMail = (req, res) => {
  const { firstname, lastname, scenario, mail, details } = req.body;

  const mailOptions = {
    from: mail,
    to: "wilhem.hafsa@outlook.fr",
    subject: "Nouveau scénario de 'Et si ...?'",
    text: `${details} \n\n scenario: ${scenario} \n\n firstname: ${firstname} \n\n lastname: ${lastname} \n\n mail: ${mail}`,
    html: `<p>${details}</p> <p>scenario: ${scenario}</p> <p>firstname: ${firstname}</p> <p>lastname: ${lastname}</p> <p>mail: ${mail}</p>`,
  };

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SENDIN,
    port: process.env.SMTP_PORT_SENDIN,
    secure: true,
    auth: {
      user: process.env.SMTP_SENDIN_USER,
      pass: process.env.SMTP_SENDIN_PASSWORD,
    },
  });

  transporter
    .sendMail(mailOptions)
    .then((info) => {
      console.warn(info);
      res.status(200).send("Message sent");
    })
    .catch((err) => {
      console.warn(err);
      res.status(500).send("Something went wrong");
    });
};

module.exports = {
  sendContactMail,
};
