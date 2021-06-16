import PostMessage from "../Model/postSchema.js"
import express from "express";
import mongoose  from "mongoose";


export const getPosts=(req,res) => {
    PostMessage.find(function(err,posts){
        if(err){console.log(err);}
        else {
            console.log(posts);
            res.json(posts);
        }
    })
}