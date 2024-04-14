import React from 'react';
import { Link } from 'react-router-dom';

const Goals = () => {
    return (
        <div className='flex flex-col justify-between'>
            <div>
                <h2 className='text-xl font-bold text-center mb-10'>What are your goals?</h2>
                <div>
                    <div className='flex justify-between mb-4 p-3 rounded-lg bg-[#F1F1F1]'>
                        <span className='text-[12px] font-semibold'>Weight Loss</span>
                        <input type="checkbox" className='bg-[#F1F1F1] cutCheck' />
                    </div>
                    <div className='flex justify-between mb-4 p-3 rounded-lg bg-[#F1F1F1]'>
                        <span className='text-[12px] font-semibold'>Muscle Gain</span>
                        <input type="checkbox" className='bg-[#F1F1F1] cutCheck' />
                    </div>
                    <div className='flex justify-between mb-4 p-3 rounded-lg bg-[#F1F1F1]'>
                        <span className='text-[12px] font-semibold'>Flexibility and Mobility</span>
                        <input type="checkbox" className='bg-[#F1F1F1] cutCheck' />
                    </div>
                    <div className='flex justify-between mb-4 p-3 rounded-lg bg-[#F1F1F1]'>
                        <span className='text-[12px] font-semibold'>General Fitness</span>
                        <input type="checkbox" className='bg-[#F1F1F1] cutCheck' />
                    </div>
                    <div className='flex justify-between mb-4 p-3 rounded-lg bg-[#F1F1F1]'>
                        <span className='text-[12px] font-semibold'>Event - specific training</span>
                        <input type="checkbox" className='bg-[#F1F1F1] cutCheck' />
                    </div>
                    <div className='flex justify-between mb-4 p-3 rounded-lg bg-[#F1F1F1]'>
                        <span className='text-[12px] font-semibold'>Mindfulness and Mental Health</span>
                        <input type="checkbox" className='bg-[#F1F1F1] cutCheck' />
                    </div>
                </div>
            </div>
            <Link to='/page/workouts'>
                <button className='signUpBtn p-3 mt-[180px] rounded-lg text-white w-full'>
                    Confirm
                </button>
            </Link>
        </div>
    );
}

export default Goals;
