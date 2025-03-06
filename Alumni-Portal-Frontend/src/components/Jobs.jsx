import React, { useState, useEffect } from 'react';
import { FiMoreVertical, FiEdit3, FiTrash2 } from "react-icons/fi";
import { FaPenToSquare } from "react-icons/fa6";
import { getDateString } from '../utils/timeConverter';

const Jobs = ({ icon, job, managePost, btnText, onViewMore }) => {
    const [jobData, setJobData] = useState(null);

    useEffect(() => {
        // Fetch job data when the component mounts
        if (job) {
            setJobData(job);
        }
    }, [job]);

    if (!jobData) {
        return <div>Loading...</div>; // Show a loading state while data is being fetched
    }

    return (
        <div className="mt-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-50 px-5 sm:px-6 py-4 border border-purple-600 rounded-xl space-y-4 md:space-y-0">
                <div className="flex items-center w-full md:w-auto">
                    <div className="text-3xl md:text-4xl">{icon}</div>
                    <div className="ml-3">
                        <h2 className="text-lg sm:text-xl md:text-2xl text-black font-semibold">{jobData.title || " "}</h2>
                        <p className="text-sm sm:text-base">
                            <span className="text-purple-500 font-semibold">{jobData.company}</span> • {jobData.type || " "}
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-auto text-left md:text-right">
                    <div className='flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8'>
                        <div className="w-full md:w-auto text-left md:text-right">
                            <h2 className="text-sm sm:text-lg md:text-xl text-black">{getDateString(jobData.posted_date) || " "}</h2>
                            <p className="text-sm sm:text-base text-black">No of vacancies: {jobData.vacancies || " "}</p>
                        </div>

                        <button className="btn bg-purple-100 border border-purple-700 text-[#5c0f8b] px-3 sm:px-6 py-2 rounded-lg w-full md:w-auto" onClick={onViewMore}>{btnText}</button>

                        {managePost && (
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="m-1">
                                    <FaPenToSquare size={32} />
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                    <li>
                                        <label htmlFor="my_modal_7" className=""> View Post </label>
                                    </li>
                                    <li><a> Edit </a></li>
                                    <li className='text-red-500 font-semibold'><a> Delete </a></li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;