import React from 'react';

const Features = () => {

  const gradientTextStyle = {
    background: 'linear-gradient(144deg, #5c0f8b 40%, #ff5100 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <div className='mt-10 bg-white px-6'>
      <h1 className="text-3xl md:text-4xl font-bold text-center italic text-blue-800" style={gradientTextStyle}>Awesome Features</h1>

      <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='bg-purple-100 p-5 rounded-md shadow-md'>
          <div className='flex items-center space-x-4'>
            <i className="fa-solid fa-graduation-cap text-4xl text-black"></i>
            <h2 className='text-zinc-800 text-2xl font-bold'>Alumni Directory</h2>
          </div>
          <p className='text-zinc-700 mt-3'>
          A searchable database of alumni profiles, including their names, graduation years, professional details, and contact information.
          </p>
        </div>

        <div className='bg-purple-100 p-5 rounded-md shadow-md'>
          <div className='flex items-center space-x-4'>
            <i className="fa-solid fa-calendar-day text-3xl text-black"></i>
            <h2 className='text-zinc-800 text-2xl font-bold'>Event Management</h2>
          </div>
          <p className='text-zinc-700 mt-3'>
          The Event Management of our Alumni Association platform offers a dynamic space for planning, promoting, and participating in engaging events.
          </p>
        </div>

        <div className='bg-purple-100 p-5 rounded-md shadow-md'>
          <div className='flex items-center space-x-4'>
            <i className="fa-solid fa-briefcase text-4xl text-black"></i>
            <h2 className='text-zinc-800 text-2xl font-bold'>Career Support</h2>
          </div>
          <p className='text-zinc-700 mt-3'>
          A platform for alumni and companies to post job openings and internships for students and fellow alumni.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
