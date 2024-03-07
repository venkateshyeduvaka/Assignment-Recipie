const {Recipie} =require("../class/recipi")

const getUserRecipies = async function (req, res) {
    try {
        const userId = req.params.userId
        const data = await Recipie.getUserRecipies(userId); 
        res.status(200).json({ 
            data
        });
    } catch (error) {
        console.log("Error in getUserRecipies controller:", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}

const createRecipie = async function (req, res) {
    //we can get the user_id from middleware or from body inside the routes we apply the middlware
    try {
        const {title, description, ingredients, instructions, userId} = req.body
      const newRecipie =  await Recipie.createRecipie(title, description, ingredients, instructions, userId)
      if(!newRecipie){
        return res.status(500).json({ error: "Failed to create recipe" });
      }
      
      res.status(200).json({ message: "Recipie created successfully", newRecipie: newRecipie });
    } catch (error) {
        console.log("Error in createRecipie:", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}

const getRecipie = async function (req, res) {
    //getRecipie based on your recipiid
    try {
        const recipieId = req.params.recipieId
        const newRecipie =  await Recipie.getRecipie(recipieId)
        console.log(newRecipie)
        if(!newRecipie){
            return res.status(500).json({ error: "recipe not found" });
        }
        
        res.status(201).json(newRecipie)
    } catch (error) {
        console.log("Error in getRecipie controller:", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}

const getRecipies = async function (req, res) {
    //all recipies
    try {
        const recipies =  await Recipie.getRecipies()
        if(!recipies){
            return res.status(500).json({ error: "recipies not found" });
        }
        res.status(201).json(recipies)
    } catch (error) {
        console.log("Error in getRecipies controller:", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}

const updateRecipie = async function (req, res) {
    //updateRecipie
    try {
        const recipieId = req.params.recipieId
        // const {title, description, ingredients, instructions, userId} = req.body
        const newRecipie =  await Recipie.updateRecipie(recipieId, req.body)
        if(!newRecipie){
            return res.status(500).json({ error: "recipe not found" });
        }
        
        res.status(200).json({ message: "Recipe updated successfully", newRecipie: newRecipie });
    } catch (error) {
        console.log("Error in updateRecipie controller:", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}

const deleteRecipie = async function (req, res) {
    //deleteRecipie with specific id
    try {
        const recipieId = req.params.recipieId
        const deletedRecipie =  await Recipie.deleteRecipie(recipieId)
        if(!deletedRecipie){
            return res.status(500).json({ error: "recipe not found" });
        }
        
        res.status(200).json({ message: "Recipe deleted successfully", deletedRecipie: deletedRecipie, recipieId: deletedRecipie._id });
    } catch (error) {
        console.log("Error in deleteRecipie controller:", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}

module.exports={getUserRecipies,createRecipie,getRecipies,getRecipie,updateRecipie,deleteRecipie}