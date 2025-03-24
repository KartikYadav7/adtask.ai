const transporter = require("../middleware/dataMiddleware");
const User = require("../models/User");
const FreeTrial = require("../models/freeTrial");
const CallSchedule = require("../models/callSchedule");

const generateFakeGoogleMeetLink = () => {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  const randomSegment = () =>
    Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");

  return `https://meet.google.com/${randomSegment()}-${randomSegment()}-${randomSegment()}`;
};


exports.formData = async (req, res) => {
  const { name, email, message } = req.body;
  const mailOptions = {
    from: `${email}`,
    to: process.env.EMAIL_USER,
    subject: "New Form Submission",
    html: `<h3>New Contact Form Submission</h3>
               <p><b>Name:</b> ${name}</p>
               <p><b>Email:</b> ${email}</p>
               <p><b>Message:</b> ${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
};

exports.freeTrial = async (req, res) => {
  try {
    const { id, name, email } = req.user; 

    if (!id || !name || !email) {
      return res
        .status(400)
        .json({ success: false, message: "User must be logged in." });
    }

    // Check if the user already has a free trial
    const existingTrial = await FreeTrial.findOne({ userId: id });

    if (existingTrial) {
      return res
        .status(400)
        .json({
          success: false,
          message: "You have already used your free trial.",
        });
    }

    // Activate free trial
    const trialStart = new Date();
    const trialEnd = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000); // 14 days from now

    const newTrial = new FreeTrial({
      userId: id,
      freeTrialStart: trialStart,
      freeTrialEnd: trialEnd,
      status: "active" ,
    });
    await newTrial.save();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: `${email}`,
      subject: " Welcome! Your Free Trial Has Started",
      html: `<p>Dear Customer,</p>  

  <p>Thank you for choosing our services! We’re excited to offer you <strong>14 days of free access</strong>.</p>  
             <p>Your free trial will expire on <strong>${trialEnd.toDateString()}</strong>.</p>  
             <p>Enjoy our platform!</p>  
             <p>Best regards,<br/><strong>The Support Team</strong></p>
`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res
        .status(200)
        .json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, message: "Failed to send email" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to activate free trial" });
  }
};

exports.scheduleCall = async (req, res) => {
 
  const { name, callDate, callTime } = req.body;
  const userId = req.user?.id;
  const email = req.user?.email;
 

  if (!email) {
    return res
      .status(400)
      .json({ success: false, message: "User email not fetched" });
  }
  const meetingLink = generateFakeGoogleMeetLink();
  const newCall = new CallSchedule({
    userId,
    name,
    email,
    callDate,
    callTime,
    meetingLink, // ✅ Generate fake link here
   
  });

  await newCall.save();


  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: `${email}`,
    subject: "Scheduling a Call",
    html: `<p>Dear ${name}</p>  

<p>I hope this email finds you well. Your meeting has been scheduled.</p>  

<p><strong>Meeting Details:</strong></p>  
<ul>  
    <li><strong>Date:</strong> ${callDate}</li>  
    <li><strong>Time:</strong> ${callTime}</li>  
    <li><strong>Duration:</strong>30 min</li>  
    <li><strong>Agenda:</strong> Counselling</li>  
    <li><strong>Google Meet Link:</strong> <a href=${meetingLink}>Join Meeting</a></li>  
</ul>  

<p>Please confirm your availability at your earliest convenience.</p>  
 <p>Looking forward to our discussion.</p>  
    <p>Best regards,</p>  
    <p><strong>${process.env.EMAIL_USER}</strong></p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
};
