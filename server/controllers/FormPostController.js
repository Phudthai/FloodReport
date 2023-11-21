const formposts = require("../models/formPost")

const { v4: uuidv4 } = require('uuid');

exports.sendRequest = async (req, res) => {
    const { email, district, area, information, image } = req.body

    let slug = uuidv4()
    if (image1 === "") {
        await MissingRequest.create({
            email : email,
            district: district,
            area:area,
            information:information,
            image:image,
            slug:slug
        }).then(() => {
            res.status(200).json({ message: "ส่งการรายงานสำเร็จ" })
        }).catch((err) => {
            res.status(400).json({ error: err })
        })
    } else {
        await MissingRequest.create({
            email: email,
            district: district,
            area: area,
            image: image,
            slug: slug,
            missing_photo1: image
        }).then(() => {
            res.status(200).json({ message: "ส่งการรายงานสำเร็จ" })
        }).catch((err) => {
            res.status(400).json({ error: err })
        })
    }
}