const mongoose = require("mongoose");

const freeTrialSchema = new mongoose.Schema({
  userId:
   {
     type: mongoose.Schema.Types.ObjectId,
      ref: "User",
       required: true 
    },
  freeTrialStart: 
  { type: Date,
     default: Date.now
     },
  freeTrialEnd: { type: Date 
    ,required:true,
  },
  status: {
    type: String,
    enum: ["active", "expired"],
    default: "active"
  }
});

freeTrialSchema.pre("save", function (next) {
  if (this.freeTrialEnd < new Date()) {
    this.status = "expired";
  } else {
    this.status = "active";
  }
  next();
});


module.exports = mongoose.model("FreeTrial", freeTrialSchema);
