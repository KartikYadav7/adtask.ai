const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "Email Already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();
    res.status(200).json({ message: "Registeration successfull" });
  } catch (err) {
    res.status(500).send({ message: "Server Error" });
    console.error(err.message);
  }
};

exports.login = async (req, res) =>{
    const {email, password} = req.body;
    try{
        let user = await User.findOne({email});
        if (!user) return res .status(400).json({message:"Invalid Email"});
        const isMatch  = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400).json({message:"Invalid Credentials"});

        const token = jwt.sign({id:user._id,name: user.name, email:user.email}, process.env.JWT_SECRET,{
            expiresIn:"1D",
        });
        res.json({token,userId:user._id, userName:user.name,
          userEmail:user.email})
    }catch(err){
        res.status(500).json({message:"Server Error"})
        console.error(err.message)
    }
}

exports.resetPassword = async(req,res)=>{
    const {email ,password,confirmPassword} = req.body;
    try{
        let user = await User.findOne({email});
        if (!user) return res.status(404).json({message:"Emaild doesn't exists"});
        
        if(password !==confirmPassword) return res.status(400).json({message:"Passwords doesn't match "});

        const hashedPassword = await bcrypt.hash(password,10);

        await User.findByIdAndUpdate(user._id , {password:hashedPassword});

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET,{
            expiresIn:"1D",
        });
        res.json({message:'Password Reset Successfull', token});
    }catch(err){
        console.error(err.message);
        res.status(500).json({message:'Internal Server Error'});
    }
}