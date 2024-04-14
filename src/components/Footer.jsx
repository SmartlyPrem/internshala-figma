import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='h-[50px] container mx-auto px-3 bg-white flex items-center justify-between fixed bottom-0 left-0 z-99'>
            <Link to='/goals'>
                <span>
                    <img src="./../img/home.svg" alt="" />
                </span>
            </Link>
            <Link to='/page/workouts'>
                <span>
                    <img src="./../img/Group.svg" alt="" />
                </span>
            </Link>
            <Link>
                <span className='w-[60px] h-[60px] border rounded-full flex justify-center items-center -translate-y-6 btnRound'>
                    <IoIosSearch className='text-3xl text-white' />
                </span>
            </Link>
            <Link to='/page/camera'>
                <span>
                    <img src="./../img/camera.svg" alt="" />
                </span>
            </Link>
            <Link to='/page/profile'>
                <span>
                    <img src="./../img/favicon.svg" alt="" />
                </span>
            </Link>
        </div>
    );
}

export default Footer;
