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

export const deletePost=(req,res) => {
    const {id}=req.params;
    console.log("id");
    console.log(id);
    PostMessage.deleteOne({_id:id},function(err){
        if(err){console.log(err.message);}
        else res.json({message: "Post Deleted Successfully!"});
    });
    
}

export const likePost=(req,res) => {
   const {id:_id}=req.params;
   let post;
   PostMessage.findOne({_id:_id},function(err,res){
  if(err){console.log(err)}
  else post=po;
  });
   console.log(post);
  PostMessage.UpdateOne({_id:_id},{likeCount: post.likeCount+1},function(err,res){
  if(!err){res.json(res);}
  });
  
}