import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import PostMessage from './Model/postSchema.js';
import postRoute from "./routes/posts.js";
//import dotenv from "dotenv";               // variables written in .env will not be updated in github;

const app = express();
app.use(bodyParser.urlencoded({extended: true }))
app.use(cors());
// mongoose.connect("mongodb://localhost:27017/myMemoryDB",{useNewUrlParser: true, useUnifiedTopology: true});

app.get("/",function(req,res){
    res.send("HEllo to Memories API");
});
app.use("/posts",postRoute);
mongoose.connect("mongodb://localhost:27017/merndb",{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(5000,function(){
   console.log("Server Running successfully on Port 5000");
}))
.catch((error) =>  {console.log(error.message)});
mongoose.set('useFindAndModify', false);




