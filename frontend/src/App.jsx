import './index.css'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'
import { Route,Routes,Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'

function App() {
  const {authUser} = useAuthContext()
  return <div className='p-4 h-screen flex items-center justify-center'>
    <Routes>
      <Route path='/' element={authUser ? <Home /> : <Navigate to="/login" />} />
      <Route path='/login'  element={authUser ? <Navigate to="/" /> : <Login />}/>
      <Route path='/signup' element={authUser ? <Navigate to="/" /> : <SignUp />} />
    </Routes>
   <Toaster/>
  </div> 
}
// bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0
export default App
// import React from 'react'
// import Sidebar from '../../components/sidebar/Sidebar'
// import MessageContainer from '../../components/messages/MessageContainer'
// const Home = () => {
//   return (
//     <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0'>
//        <Sidebar />
//        <MessageContainer />
//     </div>
//   )
// }


// export default Home