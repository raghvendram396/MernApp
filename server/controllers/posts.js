import PostMessage from "../Model/postSchema.js"
import express from "express";
import mongoose  from "mongoose";


export const getPosts=(req,res) => {
    PostMessage.find(function(err,posts){
        if(err){
        //    console.log(err);
        }
        else {
            //console.log(posts);
            res.status(200).json(posts);
        }
    })
}

// export const createPost=(req,res) =>{
//      const post=req.body;
//      console.log("CreatePost");
//      console.log(post);
//      const newPost=new PostMessage(post);
//      newPost.save();
//      res.status(201).json(newPost);
//  }
export const createPost=(req,res) => {

    const post=req.body;
    //console.log("Server");
   // console.log(post);
    const newpost= new PostMessage(post); 
    newpost.save();         
        res.status(201).json(newpost);
   
}