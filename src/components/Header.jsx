import React, { useEffect, useState } from 'react';
import { FaSignal, FaWifi } from "react-icons/fa";
import { IoIosBatteryFull } from "react-icons/io";
import { Link } from 'react-router-dom';

const Header = () => {
    const [time, setTime] = useState();

    function currentTime() {
        const date = new Date();
        const hours = date.getHours();
        const mins = date.getMinutes();
        const time = `${hours}:${mins}`;
        setTime(time)
    };

    useEffect(() => {
        currentTime();
    }, [])

    return (
        <>
            <div className='container flex justify-between my-2 items-center mb-12'>
                <span>{time}</span>
                <div className='flex gap-2 items-center'>
                    <FaSignal />
                    <FaWifi />
                    <IoIosBatteryFull className='text-xl' />
                </div>
            </div>
        </>
    );
}

export default Header;

