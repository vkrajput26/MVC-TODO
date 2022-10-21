const {Routes, Router}=require("express")
const {MvcModel}=require("../Model/Controllers.model")
const fs =require("fs")
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

mvctodoRouter.delete("/:todoId", async(req,res)=>{
  const param= req.params["todoId"];
  console.log(param)
 await MvcModel.deleteMany({id:param})

  res.send("deleted successfully")
})


module.exports={mvctodoRouter}