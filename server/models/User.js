const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    slug: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
    }
  },
  { timestamps: true }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
  if (!this.isModified) {
    next()
  }

  // hash รหัสผ่าน
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt)
})

module.exports = mongoose.model("Users", userSchema)
