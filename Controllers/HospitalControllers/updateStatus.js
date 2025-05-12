const Hospital = require('../../Models/hospitalAuthority')

const updateStatus= async (req, res) => {
  const { hospitalId, requestId, newStatus } = req.body;

  try {
    const result = await Hospital.updateOne(
      { _id: hospitalId, "bloodRequests._id": requestId },
      { $set: { "bloodRequests.$.status": newStatus } }
    );
      console.log("updated")
    res.json({ success: true, result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
}

module.exports=updateStatus;