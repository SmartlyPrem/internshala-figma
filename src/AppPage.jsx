import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const AppPage = () => {
    return (
        <div className='flex flex-col h-[800px]'>
            <div className='container mx-auto px-4'>
                <Header />
            </div>
            <div className='container mx-auto px-3'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default AppPage;
