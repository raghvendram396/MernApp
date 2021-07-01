import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import PostMessage from './Model/postSchema.js';
import postRoute from "./routes/posts.js";

import dotenv from "dotenv";               // variables written in .env will not be updated in github;

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
// mongoose.connect("mongodb://localhost:27017/myMemoryDB",{useNewUrlParser: true, useUnifiedTopology: true});

app.get("/",function(req,res){
    res.send("HEllo to Memories API");
});
app.use("/posts",postRoute);
const PORT=process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT,function(){
   console.log("Server Running successfully on Port ",PORT);
}))
.catch((error) =>  {console.log(error.message)});
mongoose.set('useFindAndModify', false);



// const mess=new PostMessage({
//     title: "Raghvendra Mishra",
//     message: "This is for testing",
//     creator: "Mishra"

// });
// mess.save();

