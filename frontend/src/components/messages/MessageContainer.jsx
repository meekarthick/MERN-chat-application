import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';
const MessageContainer = () => {
   const {selectedConversation,setSelectedConversation}= useConversation()
   
   // code for clean up

   useEffect(() =>{
    return setSelectedConversation(null)
   },[setSelectedConversation])

    return (
        <div className='flex flex-col w-full md:min-w-[450px]'>
            {!selectedConversation ? (<NoChatSelected />)
                : (
                    <>
                        <div className='bg-red-500 px-4 py-3 mb-2'>
                            {/* <span className='label-text'>To : </span> */}
                            <span className='text-white font-bold'>{selectedConversation.fullName}</span>
                        </div>
                        <Messages />
                        <MessageInput />
                    </>
                )
            }
        </div>
    )
}

export default MessageContainer

const NoChatSelected = () => {
   
    const {authUser}=useAuthContext()

    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center'>
                <p>{`Welcome 👋 ${authUser.fullName}`}</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    )
}
