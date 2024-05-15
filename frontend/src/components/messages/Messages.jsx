import React, { useEffect, useRef } from 'react'
import Message from './Message'
import UseGetMessages from '../../hooks/UseGetMessages'
import MessageSkeleton from '../skeleton/MessageSkeleton'
import useListenMessages from '../../hooks/useListenMessages'
const Messages = () => {
  const { messages, loading } = UseGetMessages();
 useListenMessages();
  const lastMessageRef = useRef()
  // const history = useHistory(); // Initialize useHistory hook
  useEffect(() => {
    if (!loading && messages.length > 0) {
      setTimeout(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 0); // Set to 0 milliseconds for fast scrolling
    }
  }, [messages, loading]);


  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message  message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className='text-center text-gray-900 text-lg'>Send a message to start conversation</p>
      )}



    </div>
  )
}

export default Messages


// import React from 'react'
// import Message from './Message'
// const Messages = () => {
//   return (
//     <div className='px-4 flex-1 overflow-auto'>
//          <Message />
//          <Message />
//          <Message />
//          <Message />
//          <Message />
//          <Message />
//          <Message />
//          <Message />
//          <Message />
//          <Message />
//     </div>
//   )
// }

// export default Messages