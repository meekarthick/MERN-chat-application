import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
export const sendMessage = async (req,res) =>{
    try {
        const {message} = req.body;
        const {id : receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants : {$all : [senderId,receiverId]},
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants : [senderId,receiverId]
            })
        }

      const newMessage = new Message({
        senderId,
        receiverId,
        message,
      })

      if(newMessage){
        conversation.messages.push(newMessage._id)
      }

//this will run parallely...
      await Promise.all([conversation.save(),newMessage.save()])


// <------ It will take some extra time ------>

    /*  await conversation.save();
       await newMessage.save(); */

      res.status(201).json({newMessage})
    } 
    catch (error) {
        console.log("Error in sendMessage controller:",error.message);
        return res.status(500).json({error:"Internal server error"}) 
    }
} 

export const getMessages = async(req,res) =>{
    try {
        console.log(req.params);
        const {id : userToChat} = req.params;
        const senderId = req.user._id

        // console.log("Sender ID:", senderId.fullName);
        // console.log(req.user._id);
        console.log("User to Chat ID:", userToChat);

        let conversation = await Conversation.findOne({
            participants : {$all : [senderId,userToChat]}
        }).populate("messages")


// if there is no conversation found return empty array
        if(!conversation) return res.status(200).json([])
        
        res.status(200).json(conversation.messages)
    } 
    
    catch (error) {
        console.log("Error in sendMessage controller:",error.message);
        return res.status(500).json({error:"Internal server error"}) 
    }
}  

