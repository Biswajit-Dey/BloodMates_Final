const User=require('../../Models/hospitalAutority');

const addUser=async(req, res) => {
    const { email, password } = req.body;
    const newUser = new User({ email, password });
  
    try {
      await newUser.save();
      res.status(201).json({ message: "User added successfully" });
    } catch (error) {
      res.status(500).json({ error: "Error saving user" });
    }
  }
  module.exports=addUser;