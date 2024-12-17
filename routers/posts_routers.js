const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts_controller");


router.get("/", postsController.getAllPosts);

// נתיב לקבלת פוסט לפי ID
router.get("/:id", postsController.getPostById);

router.post("/",  postsController.createPost);

router.delete("/:id", postsController.deletePost);

module.exports=router;


