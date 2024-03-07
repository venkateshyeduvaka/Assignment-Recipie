const express = require('express')

const {registeruser,loginuser,updateuser} = require("../controllers/userController")

const router=express.Router()

router.post("/register",registeruser)
router.post("/login",loginuser)
router.put("/updateuser/:id",updateuser) 


module.exports=router