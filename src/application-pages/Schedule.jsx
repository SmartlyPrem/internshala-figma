import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

const Schedule = () => {
    const timing = [
        {
            time: '06:00 AM',
            note: ''
        },
        {
            time: '07:00 AM',
            note: 'Ab Workout, 7:30am'
        },
        {
            time: '08:00 AM',
            note: ''
        },
        {
            time: '09:00 AM',
            note: 'Upperbody Workout, 9am'
        },
        {
            time: '10:00 AM',
            note: ''
        },
        {
            time: '11:00 AM',
            note: ''
        },
        {
            time: '12:00 AM',
            note: ''
        },
        {
            time: '01:00 PM',
            note: ''
        },
        {
            time: '02:00 PM',
            note: 'Lowerbody Workout, 3pm'
        },
        {
            time: '03:00 PM',
            note: ''
        },
        {
            time: '04:00 PM',
            note: ''
        },
        {
            time: '05:00 PM',
            note: ''
        }];

    return (
        <div>
            <h2 className='text-xl font-bold text-center mb-3'>Workout Schedule</h2>
            <div className='flex items-center justify-center'>
                <MdKeyboardArrowLeft className='text-2xl' />
                <span>Feb 2024</span>
                <MdKeyboardArrowRight className='text-2xl' />
            </div>
            <div className='flex justify-between my-3'>
                <div className='w-[70px] h-[85px] border p-3 text-center rounded-lg bg-white'>
                    <span className='block text-sm'>Sun</span>
                    <span className='text-3xl font-bold'>5</span>
                </div>
                <div className='w-[70px] h-[85px] border p-3 text-center rounded-lg' style={{
                    background: 'linear-gradient(270deg, #8DA4FF -0.62%, #D1DBFF 100.68%)'
                }}>
                    <span className='block text-sm'>Mon</span>
                    <span className='text-3xl font-bold'>6</span>
                </div>
                <div className='w-[70px] h-[85px] border p-3 text-center rounded-lg bg-white'>
                    <span className='block text-sm'>Tue</span>
                    <span className='text-3xl font-bold'>7</span>
                </div>
                <div className='w-[70px] h-[85px] border p-3 text-center rounded-lg bg-white'>
                    <span className='block text-sm'>Web</span>
                    <span className='text-3xl font-bold'>8</span>
                </div>
                <div className='w-[70px] h-[85px] border p-3 text-center rounded-lg bg-white'>
                    <span className='block text-sm'>Thu</span>
                    <span className='text-3xl font-bold'>9</span>
                </div>
            </div>
            <ul className='mt-8'>
                {
                    timing.map(
                        (t, i) => {
                            return <li key={i} className='py-3 border-b border-slate-600 
                            text-sm flex justify-between'>{t.time}
                                {t.note == "" ? "" : <span className='rounded-2xl p-2' style={{
                                    background: 'linear-gradient(270deg, #D3A4F4 0%, #E9B1E0 102.35%)'
                                }}>{t.note}</span>}
                            </li>
                        }
                    )
                }
            </ul>
            <div className='fixed bottom-20 right-6 w-[70px] h-[70px] rounded-full bg-white' style={{
                background: 'linear-gradient(90.95deg, #E9B1E0 0.79%, #D3A5F2 99.18%)'
            }}>
                <FaPlus className='absolute top-5 left-5 text-3xl text-white' />
            </div>
        </div>
    );
}

export default Schedule;
