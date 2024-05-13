import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext';
const useSignup = () => {
    
    const [isloading,setisLoading] = useState(false)
   const {setAuthUser} = useAuthContext()
    const signup = async ({fullName,username,password,confirmPassword,gender}) =>{
        const sucess = handleInputErrors({fullName,username,password,confirmPassword,gender})
       
        if(!sucess) return;

        setisLoading(true)
        
        try {
            const res = await fetch("/api/auth/signup",{
                method : "POST",
                headers : {"Content-Type":"application/json"},
                body :JSON.stringify({fullName,username,password,confirmPassword,gender})
            })


            const data = await res.json()
            console.log(data);
            if(data.error){
                throw new Error(data.error)
            }
            localStorage.setItem("chat-user",JSON.stringify(data))
            setAuthUser(data);

        } catch (error) {
            toast.error(error.message)
        }
        finally{
            setisLoading(false)
        }

    }

    return [isloading,signup];
};

export default useSignup


// handling Input Errors

function handleInputErrors({fullName,username,password,confirmPassword,gender}){
    if(!fullName || !username || !password || !confirmPassword || !gender){
      toast.error('Please fill all the fields')
      return false;
    }

    if(password != confirmPassword){
        toast.error("password doesnt matching")
        return false;
    }

    if(password.length < 6){
        toast.error('Password must be at least 6 characters')
        return false;
    }
    return true;
}