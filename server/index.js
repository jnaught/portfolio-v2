const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const nodemailer = require("nodemailer");
const config = require("./config");
const port = 3200

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/../build)`));

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_ADDRESS,
        pass: process.env.GMAIL_PASSWORD
    }
});
app.post("/api/contact", (req, res) => {
    const { email, name, subject, message } = req.body;

    const mailOptions = {
        from: email, // Sender of the email
        to: "alnacua@gmail.com", // Recipient of the email
        subject: `${email} - ${subject}`, // Subject of the email
        text: `${name} - ${message}` // Message of the email
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            //console.log(error);
            res.json({
                success: false,
                message: "There was an error sending the email!"
            });
        } else {
            //console.log('Email sent successfully' + info.response);
            res.json({ success: true, message: "Email sent successfully!" });
        }
    });
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});