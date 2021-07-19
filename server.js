import express from "express";

const app = express();

//port:4040
app.listen(4040,()=>{
    console.log('server is running on port 4040');
})


export default app;