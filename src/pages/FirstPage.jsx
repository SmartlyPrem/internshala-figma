import React from 'react';
import Welcome from '../components/Welcome';
import { Link } from 'react-router-dom';
import { MdArrowForwardIos } from "react-icons/md";


const FirstPage = () => {
    const data = {
        img: './img/image 13.png',
        title: 'Track Your Goal',
        description: 'Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals'
    }
    return (
        <div>

            <div className='flex justify-end text-blue-400 underline underline-offset-4'>
                <Link to="/sign-up">
                    Skip
                </Link>
            </div>
            <Welcome img={data.img} title={data.title} description={data.description} />

            <Link to="/second">
                <div className='flex justify-end cursor-pointer'>
                    <span className='border-t-2 border-b-2 border-r-2 rounded-full p-6 w-[40px] h-[40px] relative my-12'>
                        <span className='btnRound border rounded-full p-3 text-white absolute top-[3px] right-[3px]'><MdArrowForwardIos /></span>
                    </span>
                </div>
            </Link>
        </div>
    );
}

export default FirstPage;
