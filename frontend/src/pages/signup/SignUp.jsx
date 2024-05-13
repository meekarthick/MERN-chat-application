import React, { useState } from 'react'
import useSignup from '../../hooks/useSignup'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'

// import { sign } from 'jsonwebtoken'

const SignUp = () => {
    
    const[isloading,signup] = useSignup()
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""

    })


    const handleGenderCheckbox = (gender) =>{
      setInputs({...inputs,gender})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(inputs)
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-clip-padding bg-gray-400 backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl text-gray-300 font-semibold font text-center'>
                    Create
                    <span className='text-amber-500 font-Cedarville Cursive'> Account</span>
                </h1>


                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input type='text' placeholder=' Jhon Doe' className='w-full input input-boardered h-10'
                            value={inputs.fullName}
                             onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>User Name</span>
                        </label>
                        <input type='text' placeholder=' user@123' className='w-full input input-boardered h-10'
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>password</span>
                        </label>
                        <input type='text' placeholder='password' className='w-full input input-boardered h-10'
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Confirm password</span>
                        </label>
                        <input type='text' placeholder='Password' className='w-full input input-boardered h-10'
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    {/* GENDER CHECK BOX */}
      
                    {/* passing this as property */}
                    <GenderCheckBox 
                    onCheckBoxChange={handleGenderCheckbox} 
                    selectedGender={inputs.gender} 
                    />

                    <Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Already have an account❓
                    </Link>
                    <div>
                        <button className='btn btn-block btn-sm mt-2 border border-slate-700'disabled={isloading}>
                            {isloading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp




/* STARTER CODE */


// const SignUp = () => {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className='w-full p-6 rounded-lg shadow-md bg-clip-padding bg-gray-400 backdrop-blur-lg bg-opacity-0'>
//                 <h1 className='text-3xl text-gray-300 font-semibold font text-center'>
//                     Create
//                     <span className='text-amber-500 font-Cedarville Cursive'> Account</span>
//                 </h1>
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>Full Name</span>
//                     </label>
//                     <input type='text' placeholder=' Jhon Doe' className='w-full input input-boardered h-10' />
//                 </div>
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>User Name</span>
//                     </label>
//                     <input type='text' placeholder=' user@123' className='w-full input input-boardered h-10' />
//                 </div>
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>password</span>
//                     </label>
//                     <input type='text' placeholder='password' className='w-full input input-boardered h-10' />
//                 </div>
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>Confirm password</span>
//                     </label>
//                     <input type='text' placeholder='Password' className='w-full input input-boardered h-10' />
//                 </div>

//                 {/* GENDER CHECK BOX */}

//                 <GenderCheckBox />

//                 <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//                     Already have an account❓
//                 </a>
//                 <div>
//                     <button className='btn btn-block btn-sm mt-2 border border-slate-700'>SIGN UP</button>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default SignUp