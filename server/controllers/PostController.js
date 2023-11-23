const Formpost = require("../models/FormPost");

exports.getAllRequests = async (req, res) => {
  await Formpost.find({ isConfirmed: false })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      return res.status(500).json({ message: err });
    });
};

exports.getAllPost = async (req, res) => {
<<<<<<< Updated upstream
    await Formpost.find({ isConfirmed: true}).sort({ createdAt: -1 })
        .then((response) => {
            res.status(200).json(response)
        }).catch((err) => {
            return res.status(500).json({ message: err })
        })
}
=======
  await Formpost.find({ isConfirmed: true })
    .sort({ createdAt: -1 })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      return res.status(500).json({ message: err });
    });
};
>>>>>>> Stashed changes

exports.singleRequest = async (req, res) => {
  const { slug } = req.params;
  await Formpost.findOne({ slug })
    .then(async (response) => {
      if (!response) {
        return res.status(404).json({ message: "ไม่พบบัญชีนี้" });
      }
      return res.status(200).json(response);
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
};

exports.deleteRequest = async (req, res) => {
  const { slug } = req.params;
  await Formpost.findOneAndDelete({ slug })
    .then((post) => {
      if (!post) {
        return res.status(404).json({ message: "ไม่พบบัญชีนี้" });
      }
      return res.status(200).json({ message: "ลบบัญชีเรียบร้อย" });
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
};

exports.updateComfirmed = async (req, res) => {
  const { slug } = req.params;
  await Formpost.findOneAndUpdate(
    { slug },
    { isConfirmed: true },
    { new: true }
  )
    .then((response) => {
      res.status(200).json({ response });
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
};
