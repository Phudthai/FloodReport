const express = require('express');
const router = express.Router();
const { getAllRequests, singleRequest, getAllPost, deleteRequest, updateComfirmed, filterPost } = require("../controllers/PostController")

router.get("/post", getAllPost);
router.get("/admin", getAllRequests);
router.delete("/admin/:slug", deleteRequest);
router.patch("/admin/:slug", updateComfirmed)
router.get("/post/:slug", singleRequest)
router.post("/allpost-filter", filterPost);

                                    
module.exports = router;