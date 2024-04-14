import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <>
            <div>
                <h2 className='text-xl font-bold'>Create an account</h2>
                <div className='mt-4 h-[500px] flex-col flex justify-between my-3'>
                    <div>
                        <input type="text" className='w-full my-3 p-3 rounded-lg bg-[#F1F1F1] focus:outline-none' placeholder='First name' />
                        <input type="text" className='w-full my-3 p-3 rounded-lg bg-[#F1F1F1] focus:outline-none' placeholder='Last name' />
                        <input type="email" className='w-full my-3 p-3 rounded-lg bg-[#F1F1F1] focus:outline-none' placeholder='Email' />
                        <input type="password" className='w-full my-3 p-3 rounded-lg bg-[#F1F1F1] focus:outline-none' placeholder='Password' />
                        <div className='flex items-center'>
                            <input type="checkbox" className='me-2' />
                            <span className='text-sm text-slate-500'>By proceeding, I agree to all <a href="" className='text-blue-500'>T&C</a> and <a href="" className='text-blue-500'>Privacy Policy</a></span>
                        </div>
                    </div>
                    <Link to='/goals'>
                        <button className='signUpBtn p-3 rounded-lg text-white w-full'>
                            Create an Account
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
                    Already have an account? <Link className='text-blue-600' to="/login">
                        Login</Link>
                </div>
            </div>
        </>
    );
}

export default SignUp;
