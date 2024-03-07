const UserModel=require("../models/userModel")

const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


class User {
    constructor(username, firstname, email,password){
        this.username = username
        this.firstname=firstname
        this.email = email
        this.password = password
    }

    static async register(username,firstname, email,password){
        try {
            
            const user = await UserModel.findOne({username})
            
            if(user && user.fullName){
                console.log(user.fullName)
                throw new Error("Username already exists")
            }
            const salt= await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password,salt)
    
            const newUser = new UserModel({
                username,
                firstname,
                email,
                password: hashedPassword,
            })
            if(newUser){
                await newUser.save()
    
                return {
                    _id: newUser._id,
                    username: newUser.username,
                    firstname:newUser.firstname,
                    email: newUser.email
                }
            }else{
                throw new Error("Invalid user data")
            }

        } catch (error) {
            throw new Error(`Registration Failed ${error.message}`)
            
        }
    }


    static async login(username, password){
        try {
    
            const user = await UserModel.findOne({username});
            if (!user) {
                throw new Error("Invalid username or password");
            }
    
            if(password.length<8){
                throw new Error("Passwords must be atleast 6 characters")
        
            }
    
            const isPasswordMatched = await bcrypt.compare(password, user?.password || "");
            if (!isPasswordMatched) {
                throw new Error("Invalid username or password");
            }
    

            const jwtToken= jwt.sign({username:user.username,id:user._id},"ASSIGNMENT",{expiresIn:"2h"});
           // const jwtToken =  await generateTokenAndSend(user?._id);
    
                return{
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                    token : jwtToken
                };
            
        } catch (error) {
            console.log("Error in login controller:", error.message);
            throw new Error("Internal Server Error");
        }
    }

    static async updateProfile(userId, newData) {
            try {
            // Update user profile
            const updatedUser = await UserModel.findByIdAndUpdate(userId, newData, { new: true });
            if (!updatedUser) {
                throw new Error('User not found');
            }
            return updatedUser;
            } catch (error) {
            throw new Error(`Profile update failed: ${error.message}`);
            }
    }

    
        static async getUserRecipies(userId) {
            try {
            // based on the useid
            const user = await UserModel.findById(userId).populate('recipies');
            if (!user) {
                throw new Error('User not found');
            }
            return user.recipies;
            } catch (error) {
            throw new Error(`Fetching recipes failed: ${error.message}`);
            }
    }

}




module.exports = {User}