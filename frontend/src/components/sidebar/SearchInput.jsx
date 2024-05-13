import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../zustand/useConversation';
import useGetConversation from '../../hooks/useGetConversation';
import toast from 'react-hot-toast';
const SearchInput = () => {
    const [search, setSearch] = useState("")
    const { setSelectedConversation,selectedConversation } = useConversation()
    const {conversations} = useGetConversation()
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!search) return
        if(search.length < 3) {
          return  toast.error("Enter a valid user name")
        }
        const searchConvo = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))
        if(searchConvo){
            setSelectedConversation(searchConvo)
            setSearch("")
        }
        else{
            toast.error(" user not found")
        }
    }
    return (
        <form onSubmit={handleSubmit} className='flex items-center gap-2'>
            <input type='text' placeholder='Search...' className='input input-bordered rounded-full'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type='submit' className='btn btn-circle bg-red-500 text-white'>
                <FaSearch />
            </button>
        </form>
    )
}

export default SearchInput