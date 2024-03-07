
const mongoose=require("mongoose")

const {Schema} =mongoose

const UserSchema= mongoose.Schema(
    {
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstname: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true 
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    recipies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Recipies'}]
   
},
{timestamps: true}
)

const UserModel=mongoose.model("Profiles",UserSchema)

module.exports=UserModel;
