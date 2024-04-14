import React from 'react';
import Welcome from '../components/Welcome';
import { Link } from 'react-router-dom';
import { MdArrowForwardIos } from "react-icons/md";


const SecondPage = () => {
    const data = {
        img: './img/image 16.png',
        title: 'Get Burn',
        description: 'Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever'
    }
    return (
        <div>
            
            <div className='flex justify-end text-blue-400 underline underline-offset-4'>
                <Link to="/sign-up">
                    Skip
                </Link>
            </div>
            <Welcome img={data.img} title={data.title} description={data.description} />
            
            <Link to="/sign-up">
                <div className='flex justify-end cursor-pointer'>
                    <span className='border-t-2 border-b-2 border-r-2 rounded-full p-6 w-[40px] h-[40px] relative my-12'>
                        <span className='btnRound border rounded-full p-3 text-white absolute top-[3px] right-[3px]'><MdArrowForwardIos /></span>
                    </span>
                </div>
            </Link>
        </div>
    );
}

export default SecondPage;
