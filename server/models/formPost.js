const mongoose = require("mongoose");

const formPostSchema = mongoose.Schema(
    {
        district: {
            type: String,
        },
        area: {
            type: String,
        },
        information: {
            type: String,
        },
        slug: {
            type: String,
        },
        image: {
            type: String,
        },
        checked: {
            type: String,
            default: "pending"
        },
        expireAt: {
            type: Date,
            default: Date.now,
            index: { expires: '1d' }
        }
    },
    { timestamps: true }
);
module.exports = mongoose.model("formposts", formPostSchema)