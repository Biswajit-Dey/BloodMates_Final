const Hospital = require("../../Models/hospitalAuthority");
const jwt = require('jsonwebtoken')

const bloodReqView = async (req, res) => {
  const token = req.cookies.Bearer;
  const validate = jwt.verify(token, process.env.JWT_SECRET);
  let hospital = await Hospital.findOne({
    hospitalEmail: validate.email,
  });

    if (!hospital) {
        return res.status(404).json({ message: "Hospital not found" });
    }
    res.render("bloodRequestPage", { hospital });
}

module.exports = bloodReqView;