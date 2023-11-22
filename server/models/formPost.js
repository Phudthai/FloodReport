const mongoose = require("mongoose");

const formPostSchema = mongoose.Schema(
    {
        email: {
            type: String,
        },
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
        status: {
            type: String,
        },
        isConfirmed: {
            type: Boolean,
            default: false
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