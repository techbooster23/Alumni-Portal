import React, { useState } from 'react';
import { FiEdit, FiBell, FiLock, FiLogOut, FiUser } from 'react-icons/fi';

const Setting = () => {

    const [emailNotifications, setEmailNotifications] = useState(true);
    const [smsNotifications, setSmsNotifications] = useState(false);
    const [profileVisibility, setProfileVisibility] = useState(true);

    return (
        <>
            <div className='px-4 md:px-8'>
                <h1 className='text-3xl px-3 mt-3 font-semibold mb-6'>Settings</h1>

                <div className='grid grid-cols-1 gap-6'>

                    <div className='bg-gray-50 p-6 rounded-lg shadow-sm border-4 relative'>
                        <h2 className='text-lg font-semibold flex items-center gap-2'><FiUser /> Profile Settings</h2>
                        <p className='text-gray-500'>Update your profile information.</p>
                        <button className='mt-3 bg-blue-500 text-white px-4 py-2 rounded'>Edit Profile</button>
                    </div>


                    <div className='bg-gray-50 p-6 rounded-lg shadow-sm border-4'>
                        <h2 className='text-lg font-semibold flex items-center gap-2'><FiBell /> Notification Settings</h2>
                        <div className='mt-3 flex justify-between items-center'>
                            <p>Email Notifications</p>
                            <button className={`px-4 py-1 rounded ${emailNotifications ? 'bg-purple-600 text-white' : 'bg-gray-200'}`} onClick={() => setEmailNotifications(!emailNotifications)}>
                                {emailNotifications ? 'On' : 'Off'}
                            </button>
                        </div>
                        <div className='mt-3 flex justify-between items-center'>
                            <p>SMS Notifications</p>
                            <button className={`px-4 py-1 rounded ${smsNotifications ? 'bg-purple-600 text-white' : 'bg-gray-200'}`} onClick={() => setSmsNotifications(!smsNotifications)}>
                                {smsNotifications ? 'On' : 'Off'}
                            </button>
                        </div>
                    </div>


                    <div className='bg-gray-50 p-6 rounded-lg shadow-sm border-4'>
                        <h2 className='text-lg font-semibold flex items-center gap-2'><FiLock /> Privacy Settings</h2>
                        <div className='mt-3 flex justify-between items-center'>
                            <p>Profile Visibility</p>
                            <button className={`px-4 py-1 rounded ${profileVisibility ? 'bg-purple-600 text-white' : 'bg-gray-200'}`} onClick={() => setProfileVisibility(!profileVisibility)}>
                                {profileVisibility ? 'Visible' : 'Hidden'}
                            </button>
                        </div>
                    </div>

                    <div className='bg-gray-50 p-6 rounded-lg shadow-sm border-4'>
                        <h2 className='text-lg font-semibold flex items-center gap-2'><FiLogOut /> Account Management</h2>
                        <p className='text-gray-500'>Log out of your account securely.</p>
                        <button className='mt-3 bg-red-500 text-white px-4 py-2 rounded'> Logout </button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Setting;
