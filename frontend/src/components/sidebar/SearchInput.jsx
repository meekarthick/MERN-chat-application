import React from 'react'
import { FaSearch } from "react-icons/fa";
const SearchInput = () => {
    return (
        <div className='flex items-center gap-2'>
            <input type='text' placeholder='Searach...' className='input input-bordered rounded-full' />
            <button type='submit' className='btn btn-circle bg-red-500 text-white'>
                <FaSearch />
            </button> 
        </div>
    )
}

export default SearchInput