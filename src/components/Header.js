import React from 'react';

const Header = () => {
    return (
        <div className='max-w-screen-lg mx-auto'>
            <div className='flex my-10'>
                <h1 className='text-6xl font-bold -mt-4 lg:block sm:hidden max-sm:hidden'><span className='text-sky-600'>tri</span><span className='text-amber-500'>va</span><span className='text-rose-600'>go</span></h1>
                <div className='divider divider-horizontal'></div>
                <div>
                    <h4 className='text-2xl font-semibold'>Deals from your favourite booking sites</h4>
                    <p className=''>Try searching for a city, a specific hotel, or even a landmark!</p>
                </div>
            </div>
        </div>
    );
};

export default Header;