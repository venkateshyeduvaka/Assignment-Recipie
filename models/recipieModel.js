
const mongoose=require("mongoose")

const {Schema} =mongoose

const RecipiSchema= mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    ingredients: [{ type: String }],
    instructions: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Profiles' }
   
},
{timestamps: true}


)

const RecipiMOdel=mongoose.model("Recipies",RecipiSchema)

module.exports=RecipiMOdel