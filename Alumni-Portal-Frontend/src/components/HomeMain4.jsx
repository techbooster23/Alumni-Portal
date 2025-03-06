import React, { useEffect, useState } from 'react';
import Jobs from './Jobs';
import { Link } from 'react-router-dom';
import API from '../api/backend.api';
import JobDetailsModal from '../Job Details Component/JobDetailsModel';

const HomeMain4 = () => {
    const [allJobs, setAllJobs] = useState([]); // Correctly destructure useState
    const [searchText, setSearchText] = useState("");
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null); // State to hold the selected job for the modal

    const buttonStyle = {
        backgroundColor: '#E6E6FA', // Lavender color
        color: '#778899', // Gray color
        padding: '10px 20px',
        border: 'none',
        borderRadius: '0 20px 20px 0',
        fontSize: '16px',
        cursor: 'pointer',
    };

    useEffect(() => {
        const getAllJobs = async () => {
            try {
                const response = await API.get('/job/all-jobs', { withCredentials: true });
                setAllJobs(response.data); // Update state with response data
                setFilteredJobs(response.data);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };
        getAllJobs();
    }, []);

    console.log(allJobs)

    const handleSearchChange = (e) => {
        const searchValue = e.target.value.toLowerCase();
        setSearchText(searchValue);

        const filtered = allJobs.filter(job => 
            job.title.toLowerCase().includes(searchValue) ||
            job.company.toLowerCase().includes(searchValue) || 
            job.type.toLowerCase().includes(searchValue)
        );

        setFilteredJobs(filtered);
    };

    const handleViewMore = (job) => {
        setSelectedJob(job); // Set the selected job to display in the modal
    };

    const handleCloseModal = () => {
        setSelectedJob(null); // Close the modal
    };

    return (
        <div className="w-full md:w-[80%] min-h-screen py-22 px-5 bg-white">
            <div className='flex gap-5 mb-4 mt-1 lg:mt-0'>
                <Link to='/Alumni/jobBoard'>
                    <span className='bg-gray-200 text-black text-sm py-1 px-4 rounded-full cursor-pointer'> All Jobs </span>
                </Link>
                <Link to='/Alumni/jobBoard-postJob '>
                    <span className='bg-gray-200 text-black text-sm py-1 px-4 rounded-full cursor-pointer'> Post Jobs </span>
                </Link>
                <Link to='/Alumni/jobBoard-manageJobs'>
                    <span className='bg-gray-200 text-black text-sm py-1 px-4 rounded-full cursor-pointer'> Manage Jobs </span>
                </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4">
                <div className='border border-gray-400 rounded-full flex items-center pl-3 py- w-full md:w-auto'>
                    <i className="fa-solid fa-magnifying-glass text-gray-500 mr-2"></i>
                    <input
                        type="text"
                        placeholder="Search by job role, location or industry"
                        className="px-3 py-2 rounded-full w-full md:w-80 focus:outline-none"
                        value={searchText}
                        onChange={handleSearchChange}
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
                {filteredJobs.map((job) => (
                    <Jobs key={job.id} job={job} btnText="View More" onViewMore={() => handleViewMore(job)} />
                ))}
            </div>

            {selectedJob && <JobDetailsModal job={selectedJob} onClose={handleCloseModal} />}
        </div>
    );
}

export default HomeMain4;