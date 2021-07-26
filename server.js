import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./server/routes/userRoute";
import bodyParser from "body-parser";


dotenv.config({path:'./.env'});

const app = express();

app.use(bodyParser.json());


app.use("/freementor/v1/user",userRouter);


//port:4040
const databaseUrl=process.env.DATABASE;

mongoose.connect(databaseUrl,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:false}).then(()=>console.log("Databse connected succesfully"));

app.listen(4040,()=>{
    console.log('server is running on port 4040');
})


export default app;