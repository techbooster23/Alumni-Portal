import React from 'react';

const JobDetailsModal = ({ job, onClose }) => {
    if (!job) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-5 rounded-lg w-11/12 md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4">{job.title}</h2>
                <p className="text-lg mb-2"><strong>Company:</strong> {job.company}</p>
                <p className="text-lg mb-2"><strong>Type:</strong> {job.type}</p>
                <p className="text-lg mb-2"><strong>Location:</strong> {job.location}</p>
                <p className="text-lg mb-2"><strong>Industry:</strong> {job.industry}</p>
                <p className="text-lg mb-2"><strong>Description:</strong> {job.overview}</p>
                <p className="text-lg mb-2"><strong>Posted Date:</strong> {job.posted_date}</p>
                <p className="text-lg mb-2"><strong>Vacancies:</strong> {job.vacancies}</p>
                <p className="text-lg mb-2"><strong>Vacancies:</strong> <span className='text-blue-600 underline cursor-pointer'> {job.apply_link} </span> </p>
                <button onClick={onClose} className="mt-4 bg-purple-600 text-white px-4 py-2 rounded">Close</button>
            </div>
        </div>
    );
};

export default JobDetailsModal;