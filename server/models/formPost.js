const mongoose = require("mongoose");

const formPostSchema = mongoose.Schema(
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
        },
    },
    { timestamps: true }
);
module.exports = mongoose.model("formposts", formPostSchemaSchema)