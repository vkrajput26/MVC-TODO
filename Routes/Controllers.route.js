const {Routes, Router}=require("express")
const {MvcModel}=require("../Model/Controllers.model")

const mvctodoRouter=Router()

mvctodoRouter.get("/", async(req,res)=>{
    const data=await MvcModel.find()
    res.send(data)
})



module.exports={mvctodoRouter}