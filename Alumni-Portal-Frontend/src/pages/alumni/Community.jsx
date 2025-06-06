import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import HomeMain6 from '../../components/HomeMain6'

const Community = () => {
    return (
        <div>
            <Navbar />
            <div className='flex justify-end'>
                <Sidebar />
                <HomeMain6 />
            </div>
        </div>
    )
}

export default Community