import express from "express";
import {getPosts} from "../controllers/posts.js";

const router=express.Router();


router.get("/",getPosts);
// router.post("/",createPost);
// router.patch("/:id",updatePost);          // patch is used to update existing document
// router.delete("/:id",deletePost);
// router.patch("/:id/likePost",likePost);
export default router;