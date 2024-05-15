import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/messages/MessageContainer';
console.log(window.innerWidth);
const Home = () => {
  return (
    <div
      className={`flex flex-col sm:flex-row rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0 ${
        window.innerWidth >= 916 ? 'md:h-[570px] md:w-[70vw]' :''
      }`}
    >
      <div className="flex-grow flex sm:flex-column sm:h-[90vh] sm:w-[90vw]">
        <Sidebar className='sm:w-1/4 lg:w-1/5 ' />
        <MessageContainer className='sm:w-full lg:w-4/5 ml-4 rounded-lg' />
      </div>
    </div>
  );
};

export default Home;
