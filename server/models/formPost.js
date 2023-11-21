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
        expireAt: {
            type: Date,
            default: Date.now,
            index: { expires: '3h' }
        }
    },
    { timestamps: true }
);
module.exports = mongoose.model("formposts", formPostSchemaSchema)