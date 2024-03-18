import React from 'react'

const Conversation = () => {
    return (
        <>
            <div className='flex gap-2 items-center hover:bg-red-400 rounded p-2 py-1 cursor-pointer'>
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src="https://avatar.iran.liara.run/public/boy?username=123" alt='user avatar' />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='foont bold text-gray-200'>Raniesh</p>
                        <span className='text-xl'>&#x1F36D;</span>
                    </div>

                </div>
            </div>
            <div className='divider my-0 py-0 h-2' />
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