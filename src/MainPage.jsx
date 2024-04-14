import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

const MainPage = () => {
    return (
        <div className='h-[800px]'>
           <div className='container mx-auto px-4'>
                <Header />
            </div>
            <div className='container mx-auto px-3'>
                <Outlet />
            </div>
        </div>
    );
}

export default MainPage;
