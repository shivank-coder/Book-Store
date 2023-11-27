const express=require('express');
const app=express();
const cors=require('cors');
const path=require('path');

const router=require('./routes/book-routes');
const mongoose=require('mongoose');
app.use(express.json());
app.use(cors());

app.use("/books",router);
mongoose.connect("mongodb+srv://akash:123@book-store.kcmsxmx.mongodb.net/book-store?retryWrites=true&w=majority")
.then(()=>{
    console.log("database is connected");
})
.catch(()=>{
    console.log("database is not connected");
})
app.listen(5000,(req,resp)=>{
   console.log("hello bro")
});