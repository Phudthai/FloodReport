const formposts = require("../models/FormPost");

const { v4: uuidv4 } = require("uuid");

exports.sendRequest = async (req, res) => {
  const { loadUser, district, area, information, pic, status } = req.body;

  let slug = uuidv4();
  if (loadUser) {
    await formposts
      .create({
        email: loadUser,
        district: district,
        area: area,
        information: information,
        image: pic,
        slug: slug,
        status: status,
      })
      .then(() => {
        res.status(200).json({ message: "ส่งการรายงานสำเร็จ" });
      })
      .catch((err) => {
        res.status(400).json({ error: err });
      });
  } else {
    return res.status(400).json({ error: "เกิดข้อผิดพลาด" });
  }
};
