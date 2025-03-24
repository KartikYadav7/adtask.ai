const mongoose = require("mongoose");

const callScheduleSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true }, // Name from frontend
  email: { type: String, required: true }, // Fetch email from logged-in user
  callDate: { type: Date, required: true }, // Call Date
  callTime: { type: String, required: true }, // Call Time (e.g., "14:30")
  meetingLink: { type: String, required: true }, // Video call link (Zoom/Google Meet)
  
}, { timestamps: true });

module.exports = mongoose.model("CallSchedule", callScheduleSchema);
