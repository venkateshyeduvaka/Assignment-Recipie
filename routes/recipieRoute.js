const express=require("express")

const {getUserRecipies,createRecipie,getRecipies,getRecipie,updateRecipie,deleteRecipie} =require("../controllers/recipieConroller")


const router=express.Router()

router.get('/:userId', getUserRecipies) 

router.post('/',  createRecipie)
router.get('/:recipieId', getRecipie)
router.get('/', getRecipies)
router.put('/:recipieId', updateRecipie)
router.delete('/:recipieId', deleteRecipie)

module.exports=router