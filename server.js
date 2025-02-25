// server.js (Optional Backend)
import express from 'express';
import nodemailer from 'nodemailer';  // Example for sending emails

const app = express();
const port = 3000;

// Middleware to parse JSON data from incoming requests
app.use(express.json());

// Example route to handle booking submissions
app.post('/submit-booking', async (req, res) => {
  const { bookingDetails, guestDetails, files } = req.body;

  // Use nodemailer or another package to send email with booking details and files
  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@example.com',
        pass: 'your-email-password'
      }
    });

    let info = await transporter.sendMail({
      from: '"Bunkaway Booking" <your-email@example.com>',
      to: 'bunkaway.booking@gmail.com',
      subject: `New Booking Request - ${bookingDetails.property} - ${bookingDetails.room}`,
      text: `Booking details: ${JSON.stringify(bookingDetails)}, Guest Details: ${JSON.stringify(guestDetails)}`,
      attachments: files
    });

    res.status(200).json({ message: 'Booking successfully submitted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit booking', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
