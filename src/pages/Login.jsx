import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";

const Login = () => {
    const [toggel, setToggel] = useState(false);
    return (
        <>
            <div>
                <h2 className='text-xl font-bold'>Welcome Back</h2>
                <div className='mt-4 h-[500px] flex-col flex justify-between my-3'>
                    <div>
                        <input type="email" className='w-full my-3 p-3 rounded-lg bg-[#F1F1F1] focus:outline-none' placeholder='Email' />
                        <div className='my-3 relative'>
                            <input type={`${toggel ? 'text' : 'password'}`} className={`w-full p-3 rounded-lg bg-[#F1F1F1] focus:outline-none ${toggel ? 'border border-red-500' : ''}`} placeholder='Password' />
                            <span onClick={() => setToggel(!toggel)} className='absolute top-[15px] right-[15px] cursor-pointer'>
                                {toggel ? <FaRegEye className='text-xl text-slate-400' /> : <IoIosEyeOff className='text-xl text-slate-400' />}
                            </span>
                        </div>
                        <Link className='text-sm text-slate-500 underline'>Forgot your password?</Link>
                    </div>
                    <Link to='/goals'>
                        <button className='signUpBtn p-3 rounded-lg text-white w-full'>
                            Sign In
                        </button>
                    </Link>
                </div>
                <div className='mb-5 relative'>
                    <hr className='my-3' />
                    <span className='bg-white absolute top-[-10px] left-[47%] w-[35px] text-center h-[25px]'>or</span>
                </div>
                <div className='flex justify-center gap-4 py-5'>
                    <div className='w-[40px] h-[40px] flex justify-center items-center border-2 border-slate-400 rounded-lg'><img src="./img/flat-color-icons_google.svg" alt="" /></div>
                    <div className='w-[40px] h-[40px] flex justify-center items-center border-2 border-slate-400 rounded-lg'><img src="./img/Vector.svg" alt="" /></div>
                </div>
                <div className='text-center text-sm my-6'>
                    Don’t have an account yet? <Link className='text-blue-600' to="/sign-up">
                        Create an account</Link>
                </div>
            </div>
        </>
    );
}

export default Login;
