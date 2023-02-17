const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const cors = require('cors');
const app = express();
const route = require('./routes/route')
mongoose.set("strictQuery", true)

app.use(express.json());
app.use(cors());
app.use(route);

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true
})
.then(()=>console.log("MongoDB Connected..."))
.catch((err)=>console.log(err))

app.listen(5000,function(){
    console.log("Server is connected to :"+5000);
});