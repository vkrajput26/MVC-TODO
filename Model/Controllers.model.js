const mongoose=require("mongoose")

const MvcSchema= new mongoose.Schema({
    id:Number,
    name:String,
    age:Number,
})

const MvcModel= mongoose.model("mvctodo", MvcSchema)

module.exports={MvcModel}