const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());

// Create a transporter
const transporter = nodemailer.createTransport({
  service: "your-email-service",
  auth: {
    user: "your-email@example.com",
    pass: "your-email-password",
  },
});

// API endpoint for sending email
app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Compose the email
  const mailOptions = {
    from: email, // Use the provided email as the "from" field
    to: "your-inbox-email@example.com", // Replace with your email address
    subject: "New message from your website",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending email");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
