
const express= require("express")

const bodyparser=require("body-parser")

const mongoose =require("mongoose")

const cors=require("cors")

const UserRoute=require("./routes/userRoute")
const RecipiRoute=require("./routes/recipieRoute")

const app=express()
app.use(cors())
app.use(bodyparser.json({limit:"30mb",extend:true}))

app.use(bodyparser.urlencoded({limit:"30mb",extended:true}))



mongoose.connect("mongodb://127.0.0.1:27017/SwivlAssignment")


app.use('/auth', UserRoute)
app.use("/recipie",RecipiRoute)


app.listen(6000,()=>{
    console.log("server is running")
})