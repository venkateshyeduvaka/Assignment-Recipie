const {User} = require("../class/user")

const registeruser = async function(req, res){
    try {
        const { username,firstname, email, password } = req.body;
        const response = await User.register(username,firstname, email, password); 
        res.status(200).json({ 
            msg: 'User registation successfully',
            user: response
        });
    } catch (error) {
        console.log("Error in register data enter by the user:", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}

const loginuser = async function(req, res){
    try {
        const { username, password } = req.body;
        const response = await User.login(username, password); 
        const {_id,  email, token} = response

        res.status(200).json({ 
            msg: 'User logged in successfully',
            jwtToken: token,
            user: {
                _id,
                username: response.username,
                email
            }
        });
    } catch (error) {
        console.log("Error in login credenticals:", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}

const updateuser = async function(req, res){
    try {
        const userId = req.params.id
        const response = await User.updateProfile(userId, req.body);
        const {_id, email} = response
        res.status(200).json({ 
            msg: 'User updated successfully',
            user: {
                _id,
                username: response.username,
                email
            }
        });
    } catch (error) {
        console.log("Error in updateProfile:", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}


module.exports={registeruser,loginuser,updateuser}