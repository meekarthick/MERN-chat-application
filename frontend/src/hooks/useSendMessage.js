import React, { useState } from 'react'
import useConversation from '../zustand/useConversation'
import toast from 'react-hot-toast'

const useSendMessage = () => {
  const[loading,setLoading] = useState()
  const{messages,setMessages,selectedConversation} = useConversation()
  
  const sendMessage = async (message) =>{
    setLoading(true)

    try {
        const res = await fetch(`/api/message/send/${selectedConversation._id}`,{
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({message})
        })

        const data = await res.json()
        const  newData = {
            createdAt : data.newMessage.createdAt,
            message : data.newMessage.message,
            receiverId:data.newMessage.receiverId,
            senderId:data.newMessage.senderId,
            _id : data.newMessage._id
        }
        if(data.error){
            throw new Error(data.error)
        }
        setMessages([...messages,newData])
        console.log("data:",data);
    } catch (error) {
        toast.error(error.message)
    }
    finally{
        setLoading(false)
    }
  }
  return {loading,sendMessage}
}

export default useSendMessage