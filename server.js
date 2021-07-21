import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({path:'./.env'});

const app = express();

//port:4040
const databaseUrl=process.env.DATABASE;

mongoose.connect(databaseUrl,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:false}).then(()=>console.log("Databse connected succesfully"));

app.listen(4040,()=>{
    console.log('server is running on port 4040');
})


export default app;