import React from 'react';
import Jobs from './Jobs';

const HomeMain4 = () => {

    const buttonStyle = {
        backgroundColor: '#E6E6FA', // Lavender color
        color: '#778899', // Gray color
        padding: '10px 20px',
        border: 'none',
        borderRadius: '0 20px 20px 0',
        fontSize: '16px',
        cursor: 'pointer',
    };

    return (
        <div className="w-full md:w-[80%] min-h-screen py-22 px-5 bg-white">
            <div className='flex gap-5 mb-5'>
                <span className='bg-gray-200 text-black text-sm py-1 px-4 rounded-full cursor-pointer'> All Jobs </span>
                <span className='bg-gray-200 text-black text-sm py-1 px-4 rounded-full cursor-pointer'> Post Jobs </span>
                <span className='bg-gray-200 text-black text-sm py-1 px-4 rounded-full cursor-pointer'> Manage Jobs </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4">
                <div className='border border-gray-400 rounded-full flex items-center pl-3 py- w-full md:w-auto'>
                    <i className="fa-solid fa-magnifying-glass text-gray-500 mr-2"></i>
                    <input
                        type="text"
                        placeholder="Search by job role, location or industry"
                        className="px-3 py-2 rounded-full w-full md:w-80 focus:outline-none"
                    />
                    <button style={buttonStyle} className="ml-2"> Search </button>
                </div>
                <select className="border border-gray-400 px-3 py-2 rounded-lg cursor-pointer">
                    <option>Sort by: Most Relevant </option>
                </select>
                <select className="border border-gray-400 px-3 py-2 rounded-lg cursor-pointer">
                    <option>Type: On Site</option>
                </select>
            </div>

            <div className='mt-5'>
                <Jobs />
            </div>
        </div>
    );
}

export default HomeMain4;
