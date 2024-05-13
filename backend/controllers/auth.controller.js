import bcrypt from "bcryptjs"
import User from '../models/user.model.js'
import generateTokenandSetCookie from "../utils/generateToken.js";


//creating a logic for new sign up
 export const signup = async (req, res) =>{
    try {
       const {fullName,username,password,confirmPassword,gender} = req.body;
       
       if(password !== confirmPassword){
         return res.status(400).json({error:"Password doesn't match"})
         }

         const user = await User.findOne({username})
         console.log(user);
         if(user){
            return res.status(400).json({error:"UserName already exists"})
         }

         //HashPassword HERE
         const salt = await bcrypt.genSalt(10)
         const hashedPassword = await bcrypt.hash(password,salt)

         const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
         const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

         const newUser = new User({
            fullName,
            username,
            password : hashedPassword,
            profilepic : gender === "male" ? boyProfilePic : girlProfilePic
         })
   
         if(newUser){
            await newUser.save();
            console.log(`Sucessfully signed up ${newUser.fullName}`);
            generateTokenandSetCookie(newUser._id,res)
            res.status(201).json({
               _id:newUser.id,
               fullName: newUser.fullName,
               username: newUser.username,
               profilepic: newUser.profilepic 
            });
         }
         else{
            res.status(400).json({error:"Invalid user data"})
         }

    } catch (error) {
        console.log("Error in signup controller",error.message);
        res.status(500).json({error:"Internal Server Error"})
    }
 }

 export const login =async (req, res) =>{ 
   try {
      const {username,password} = req.body;
      const user = await User.findOne({username})
      const isPassCorrect = await bcrypt.compare(password,user?.password || "")
      console.log(user.username);
      console.log(isPassCorrect);
      if(!user || !isPassCorrect){
         return res.status(400).json({error:"Invalid username or password"})
      }
      generateTokenandSetCookie(user._id,res)

      res.status(200).json({
         _id : user.id,
         fullName : user.fullName,
         username : user.username,
         profilepic : user.profilepic
      })

   } catch (error) {
      console.log("Error in login controller",error.message);
      res.status(500).json({error:"Internal Server Error"})
   }
}

export const logout = (req, res) =>{
   try {
       res.cookie ("jwt","",{maxAge:0})
       res.status(200).json({message:"Logged out successfully"})
   } catch (error) {
      console.log("Error in signup controller",error.message);
      res.status(500).json({error:"Internal Server Error"})
   }
 }