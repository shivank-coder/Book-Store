const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const bookStore=new Schema({
  
    
name:{
    type:String,
    require:true,
},
author:{
    type:String,
    require:true,

},
description:{
    type:String,
    require:true,

},
price:{
    type:String,
    require:true,

},
available:{
    type:String,
    require:true,

},

image:{
type:String,
require:true,
},

});
module.exports=mongoose.model("book",bookStore);
