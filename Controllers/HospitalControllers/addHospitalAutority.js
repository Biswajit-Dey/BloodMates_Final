const Hospital=require('../../Models/hospitalAuthority');

const addUser=async(req, res) => {

  const obj = req.body;
  res.send(obj)
    // const { email, password } = req.body;
    // const newUser = new Hospital({ email, password });
  
    // try {
    //   await newUser.save();
    //   res.status(201).json({ message: "User added successfully" });
    // } catch (error) {
    //   res.status(500).json({ error: "Error saving user" });
    // }
  }
  module.exports=addUser;