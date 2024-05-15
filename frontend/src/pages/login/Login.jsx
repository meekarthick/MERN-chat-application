import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0 '>
                <h1 className='text-3xl font-semibold text-center text-gray-300 '>
                    Login to
                    <span className='text-red-500'> Chat</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>username</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter username'
                            className='w-full input input-bordered h-10 '
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>password</span>
                        </label>
                        <div className='relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Enter password'
                                className='w-full input input-bordered h-10'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type='button'
                                className='absolute inset-y-0 right-0 px-3 flex items-center'
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? (
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='h-5 w-5 text-gray-500 cursor-pointer'
                                        viewBox='0 0 20 20'
                                        fill='currentColor'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M10 4a8 8 0 0 0-8 8c0 1.63.49 3.13 1.33 4.4l1.43-1.43c-.54-.82-.76-1.77-.62-2.76a5.5 5.5 0 0 1 5.94-5.94c.99.14 1.94-.08 2.76-.62l1.43-1.43C13.13 4.49 11.63 4 10 4zM2 10a8 8 0 0 0 6.77 7.94l1.43-1.43A5.47 5.47 0 0 1 4 10a5.5 5.5 0 0 1 5.5-5.5c.99.14 1.94-.08 2.76-.62l1.43-1.43C10.5 4.87 7.98 4 5 4a8 8 0 0 0-3 15.09l1.5-1.5A5.49 5.49 0 0 1 10 18c3.04 0 5.5-2.46 5.5-5.5a5.49 5.49 0 0 1-1.09-3.24l1.5-1.5A8 8 0 0 0 2 10z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='h-5 w-5 text-gray-500 cursor-pointer'
                                        viewBox='0 0 20 20'
                                        fill='currentColor'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M10 4a8 8 0 0 0-8 8c0 1.63.49 3.13 1.33 4.4l1.43-1.43C3.56 14.23 3 12.24 3 10a7 7 0 0 1 12.68-4.9l1.43-1.43A8 8 0 0 0 10 4zM2 10a8 8 0 0 0 13.1 6.32l1.43-1.43A7 7 0 0 1 3.6 5.43l1.43-1.43A8 8 0 0 0 2 10zm7-6a7 7 0 0 1 9.68 9.68l-1.43 1.43A8 8 0 0 0 12 6.32l-1.43 1.43A7 7 0 0 1 9 4zm9 6a7 7 0 0 1-7 7c-1.24 0-2.4-.33-3.4-.9l1.5-1.5C10.73 15.9 10.35 16 10 16a6 6 0 0 1-6-6c0-.35.1-.73.24-1.1l1.5-1.5A7 7 0 0 1 18 10z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <Link to='/signup' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Don't have an account❓
                    </Link>

                    <div>
                        <button className='btn btn-block btn-sm mt-2' disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : 'LOG IN'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;


// STARTER CODE FOR THIS FILE 
// const Login = () => {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg 
//         bg-opacity-0 '>
//                 <h1 className='text-3xl font-semibold text-center text-gray-300 '>
//                     Login to
//                     <span className='text-red-500'>  Chat</span>
//                 </h1>

//                 <form>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text'>username</span>
//                         </label>
//                         <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10 ' />
//                     </div> 
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text'>password</span>
//                         </label>
//                         <input type='text' placeholder='Enter password' className='w-full input input-bordered h-10 ' />
//                     </div>
//                     <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Don't have an account❓</a>

//                     <div>
//                         <button className='btn btn-block btn-sm mt-2'>LOG IN</button>
//                     </div>
//                 </form>
//             </div>

//         </div>
//     )
// }

// export default Login