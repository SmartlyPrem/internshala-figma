import React from 'react';

const Welcome = ({ img, title, description }) => {
    return (
        <>
            <div className='flex justify-center my-10'>
                <img src={img} alt="" />
            </div>
            <h2 className='text-xl font-semibold my-3'>
                {title}
            </h2>
            <p className='text-slate-600 text-md mb-[50px]'>
                {description}
            </p>
        </>
    )
}

export default Welcome;
