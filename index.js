const express=require("express")
require('dotenv').config()
const {mvctodoRouter}=require("./Routes/Controllers.route")
const {connection}=require("./Configs/db")
const {MvcModel} = require("./Model/Controllers.model")

const app =express()
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("homeee")
})

app.use("/todos",mvctodoRouter)




app.listen(process.env.PORT_number, async()=>{
    try{
        await connection
       console.log(" DB is connected ")
    }
    catch(err){
        console.log(err)
    }
    console.log(`listing ${process.env.PORT_number}`)

})