import React, { useState } from 'react';
import { LuAlertTriangle } from "react-icons/lu";
import { Link } from 'react-router-dom';

const Workouts = () => {

    return (
        <div>
            <h2 className='text-xl font-bold text-center mb-10'>Workout Tracker</h2>
            <div className='mb-10'>
                <div>
                    <img src="./../img/Chart Full@2x.png" alt="" />
                </div>
                <div style={{
                    background: 'linear-gradient(90.07deg, rgba(129, 157, 255, 0.28) 5.94%, rgba(16, 16, 16, 0) 76.45%)'
                }} className='w-full h-[50px] my-6 rounded-lg border flex gap-2 items-center px-2 py-3'>
                    <span><LuAlertTriangle className='text-xl text-blue-400' /></span>
                    <p className='text-sm'>You've burned fewer calories than yesterday. Time to get moving!</p>
                </div>
            </div>
            <div className='mb-10'>
                <div className='flex justify-between my-3'>
                    <h2 className='text-lg font-bold'>Upcoming Workout</h2>
                    <Link className='text-sm text-slate-600'>See More</Link>
                </div>
                <div>
                    <div className='flex items-center justify-between bg-white rounded-lg p-3 my-3 w-full gap-3'>
                        <img src="./../img/Ellipse 53.png" alt="" />
                        <div>
                            <h3>Full Body Workout</h3>
                            <span>Today 3pm</span>
                        </div>
                        <Input/>
                    </div>
                    <div className='flex items-center justify-between bg-white rounded-lg p-3 my-3 w-full gap-3'>
                        <img src="./../img/Ellipse 54.png" alt="" />
                        <div>
                            <h3>Upper Body Workout</h3>
                            <span>4 Feb, 3:30 pm</span>
                        </div>
                        <Input />
                    </div>
                </div>
            </div>
            <div className='mb-6 flex justify-between items-center'>
                <h2 className='text-lg font-bold my-3'>Workout Schedule </h2>
                <Link to='/page/schedule'>
                    <button className='p-2 rounded-lg btnRound'>Go on Schedule</button>
                </Link>
            </div>
            <div>
                <div className='flex justify-between'>
                    <h2 className='text-lg font-bold my-3'>What Do You Want to Train</h2>
                </div>
                <div className='flex justify-between bg-[#8CB1FF] rounded-lg items-center p-3'>
                    <div>
                        <h3 className='text-semibold text-md'>Full Body Workout</h3>
                        <span className='block text-sm text-slate-600'>Arms</span>
                        <span className='block text-sm text-slate-600'>Chest</span>
                        <span className='block text-sm text-slate-600'>Legs</span>
                    </div>
                    <img src="./../img/Ellipse 55.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Workouts;

const Input = () => {
    const [toggel, setToggel] = useState(false);

    return (
        <div>
            <input type="checkbox" id="toggleButton" className="hidden" />
            <label htmlFor="toggleButton" className="flex items-center cursor-pointer">
                <div className="relative">
                    <div className={`w-10 h-6 ${toggel ? 'bg-blue-400' : 'bg-gray-400'} rounded-full shadow-inner`} />
                    <div onClick={() => setToggel(!toggel)} className={`absolute w-6 h-6 bg-white rounded-full shadow duration-300 inset-y-0 ${toggel ? 'left-0' : 'right-0'}`} />
                </div>
            </label>
        </div>
    )
}

export {Input};