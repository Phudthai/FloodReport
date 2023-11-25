const { v4: uuidv4 } = require("uuid");
//mongodb user modal
const User = require("../models/User");

const generateToken = require("../config/generateToken");

// Signup
exports.signup = async (req, res) => {
  const { lowercaseemail, password, confirmpassword } = req.body

  let slug = uuidv4()

  const emailExist = await User.findOne({ email: lowercaseemail });
  if (emailExist) {
    return res.status(400).json({ error: "อีเมลนี้ถูกใช้งานแล้ว" })
  }

  const emailForm = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
  if (!emailForm.test(lowercaseemail) && lowercaseemail !== "") {
    return res.status(400).json({ error: "รูปแบบของอีเมลไม่ถูกต้อง" })
  }
  if (password.length < 8) {
    return res.status(400).json({ error: "พาสเวิร์ดควรมีความยาวขั้นต่ำ 8 ตัวอักษร", });
  }
  if (password != confirmpassword) {
    console.log(password, confirmpassword)
    return res.status(400).json({ error: "ยืนยันรหัสผ่านไม่ถูกต้อง" })
  }
  await User.create({
    email: lowercaseemail,
    password: password,
    slug: slug,
  })
    .then((user) => {
      console.log(user)
      res.json({ token: generateToken(user._id), email: user.email })
    })
    .catch((err) => {
      res.status(400).json({ error: err })
    })
}

// Signin
exports.signin = async (req, res) => {
  const { lowercaseemail, password } = req.body
  
  if (lowercaseemail == "" || password == "") {
    return res.status(400).json({ error: "กรุณากรอกข้อมูลให้ครบ" })
  }

  const user = await User.findOne({ email: lowercaseemail });
  if (user) {
    if (user && (await user.matchPassword(password))) {
      return (res.json)({
        _id: user._id,
        email: user.email,
        role: user.role,
        token: generateToken(user._id)
      })
    } else {
      return res.status(400).json({ error: "ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง" })
    }
  } else {
    return res.status(400).json({ error: "ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง" })
  }
}