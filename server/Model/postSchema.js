import mongoose from "mongoose";

const PostSchema=new mongoose.Schema({
    title: String,
    message: String,
    Creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostMessage=mongoose.model("PostMessage",PostSchema);

export default PostMessage;