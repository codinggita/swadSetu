import nodemailer from 'nodemailer';

// @desc    Send support email
// @route   POST /api/support/request
// @access  Public
const sendSupportRequest = async (req, res) => {
  const { userName, issueType, description } = req.body;

  if (!userName || !issueType || !description) {
    return res.status(400).json({ message: 'Please provide all fields' });
  }

  try {
    // Create a transporter
    // IMPORTANT: To make this work, the user must provide these in .env
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail
        pass: process.env.EMAIL_PASS, // Your Gmail App Password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'sumit.m.kumar.cg@gmail.com',
      subject: `New Support Request: ${issueType}`,
      text: `
        Name: ${userName}
        Issue Type: ${issueType}
        
        Description:
        ${description}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Support request sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send support request. Please check server configuration.' });
  }
};

export { sendSupportRequest };
