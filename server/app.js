import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
//import dotenv from "dotenv";               // variables written in .env will not be updated in github;

const app = express();
app.use(bodyParser.urlencoded({extended: true }))
app.use(cors());
mongoose.connect("mongodb://localhost:27017/myMemoryDB",{useNewUrlParser: true, useUnifiedTopology: true});

app.get("/",function(req,res){
    res.send("HEllo to Memories API");
});

app.listen(5000,function()
{console.log("Server successfully running on Port 5000")});



