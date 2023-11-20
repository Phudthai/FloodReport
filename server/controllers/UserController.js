const { v4: uuidv4 } = require("uuid");
//mongodb user modal
const User = require("../models/User");

//Password handLer
const bcrypt = require("bcrypt");

const generateToken = require("../config/generateToken");

// Signup
exports.signup = (req, res) => {
  let { email, password, confirmpassword } = req.body;

  slug = uuidv4();
  console.log(email, password, confirmpassword, slug);
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    return res.status(400).json({
      error: "รูปแบบของอีเมลล์ไม่ถูกต้อง",
    });
  } else if (password.length < 8) {
    return res.status(400).json({
      error: "พาสเวิร์ดควรมีความยาวขั้นต่ำ 8 ตัวอักษร",
    });
  } else if (password != confirmpassword) {
    return res.status(400).json({
      error: "ยืนยันพลาสเวิร์ดผิดพลาด",
    });
  } else {
    //checking if user already exists
    User.find({ email })
      .then((result) => {
        if (result.length) {
          return res.status(400).json({
            error: "อีเมลล์นี้ถูกใช้งานไปแล้ว",
          });
        } else {
          //Try to create new user

          //password handLing
          const saltRounds = 10;
          bcrypt.hash(password, saltRounds).then((hashedPassword) => {
            const newUser = new User({
              _id,
              email,
              password: hashedPassword,
              slug,
              token: generateToken(_id)
            });
            newUser
              .save()
              .then((result) => {
                res.json({
                  status: "SUCCESS",
                  message: "Signup successful",
                  data: result,
                });
              })
              .catch((err) => {
                return res.status(400).json({
                  error: "เกิดความผิดพลาด",
                });
              });
          });
        }
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({
          error: "เกิดความผิดพลาด",
        });
      });
  }
};


// Signin
exports.signin = (req, res) => {
  let { email, password } = req.body;

  if (true) {
    //check if user exist
    User.find({ email })
      .then((data) => {
        if (data) {
          //User exists

          const hashedPassword = data[0].password;
          bcrypt
            .compare(password, hashedPassword)
            .then((result) => {
              if (result) {
                //Password match
                res.json({
                  status: "SUCCESS",
                  message: "Signin successful",
                  data: data,
                });
              } else {
                return res.status(400).json({
                  error: "เกิดความผิดพลาด",
                });
              }
            })
            .catch((err) => {
              return res.status(400).json({
                error: "เกิดความผิดพลาด",
              });
            });
        } else {
          return res.status(400).json({
            error: "เกิดความผิดพลาด",
          });
        }
      })
      .catch((err) => {
        return res.status(400).json({
          error: "เกิดความผิดพลาด",
        });
      });
  }
};
