import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex flex-col sm:flex-row h-full w-full rounded-lg sm:h-[90vh] sm:w-[90vw] overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0'>
      <div className="flex-grow flex">
        <Sidebar className='sm:w-1/4 backdrop-filter backdrop-blur-lg rounded-lg' />
        <MessageContainer className='sm:w-full ml-4 backdrop-filter backdrop-blur-lg rounded-lg' />
      </div>
    </div>
  )
}

export default Home
