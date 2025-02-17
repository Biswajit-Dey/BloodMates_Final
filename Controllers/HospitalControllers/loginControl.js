const Hospital=require('../../Models/hospitalAuthority');

const loginUser=async (req, res) => {
    const { email, password } = req.body;
    const user = await Hospital.findOne({ email });
  
    if (!user || user.password !== password) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
  
    res.status(200).json({ message: "Login successful" });
  }

  module.exports=loginUser;