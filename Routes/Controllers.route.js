const {Routes, Router}=require("express")
const {MvcModel}=require("../Model/Controllers.model")

const mvctodoRouter=Router()

mvctodoRouter.get("/", async(req,res)=>{
    const data=await MvcModel.find()
    res.send(data)
})

mvctodoRouter.post("/create", async(req,res)=>{
    const payload=req.body;
    await MvcModel.insertMany([payload])
    res.send("data added successfully")
})




module.exports={mvctodoRouter}