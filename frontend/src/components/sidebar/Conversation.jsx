import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext'

const Conversation = ({conversation,emoji,lastIdx}) => {
  const {selectedConversation,setSelectedConversation} = useConversation()
  const{onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id)
  const isSelected = selectedConversation?._id === conversation._id 
    return (
        <>
            <div 
            className={`flex gap-2 items-center hover:bg-red-500 text-white rounded p-2 py-1 cursor-pointer
            ${isSelected ? "bg-red-500" :""}
            `}
            onClick={() => setSelectedConversation(conversation)}
            >
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className="w-12 rounded-full">
                        <img src={conversation.profilepic} alt='user avatar' />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-white'>{conversation.fullName}</p>
                        <span className='text-xl'>{emoji}</span>
                    </div>

                </div>
            </div>
          {!lastIdx && <div className='divider my-0 py-0 h-2' />}
        </>
    )
}

export default Conversation


// import React from 'react' 

// const Conversation = () => {
//     return (
//         <>
//             <div className='flex gap-2 items-center hover:bg-red-400 rounded p-2 py-1 cursor-pointer'>
//                 <div className="avatar online">
//                     <div className="w-12 rounded-full">
//                         <img src="https://avatar.iran.liara.run/public/boy?username=123" alt='user avatar' />
//                     </div>
//                 </div>
//                 <div className='flex flex-col flex-1'>
//                     <div className='flex gap-3 justify-between'>
//                         <p className='foont bold text-gray-200'>Raniesh</p>
//                         <span className='text-xl'>&#x1F36D;</span>
//                     </div>

//                 </div>
//             </div>
//             <div className='divider my-0 py-0 h-2' />
//         </>
//     )
// }

// export default Conversation