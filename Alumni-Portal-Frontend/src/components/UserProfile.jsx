import React, { useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaBirthdayCake, FaUser } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { useUser } from "../store/UserProvider";
import EditModal from "./EditModal";

const Profile = () => {
    const { user, setUser } = useUser();

    const [profileImage, setProfileImage] = useState(
        `https://ui-avatars.com/api/?name=${user.name}&background=fff1f1&color=080e4d`
    );

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState({});

    const handleImageUpload = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfileImage(reader.result);
            }
            reader.readAsDataURL(file);
        }
    };

    const handleEditClick = (data) => {
        setModalData(data);
        setIsModalOpen(true);
    };

    const handleSave = (updatedData) => {
        setUser({ ...user, ...updatedData });
        console.log("Updated Data:", updatedData);
    };

    return (
        <div className="container mx-auto p-6">
            {/* Profile Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-2 p-6 rounded-lg text-center shadow-sm">
                    <div className="relative w-24 h-24 mx-auto border-2 border-purple-500 rounded-full flex items-center justify-center">
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="w-20 h-20 rounded-full"
                        />
                        <input
                            type="file"
                            accept="image/*"
                            id="profileImageInput"
                            className="hidden"
                            onChange={handleImageUpload}
                        />
                        <label
                            htmlFor="profileImageInput"
                            className="absolute bottom-0 right-0 bg-white p-1 rounded-full border border-gray-300 cursor-pointer"
                        >
                            📷
                        </label>
                    </div>
                    <h2 className="mt-3 text-lg font-semibold">
                        {user.name} <FiEdit3 className="inline text-gray-500 ml-1 cursor-pointer" onClick={() => handleEditClick({ name: user.name })} />
                    </h2>
                    <p className="text-gray-500">Alumni, Class of 2024</p>
                    <p className="text-gray-500">Bachelor of Computer Applications, BCA</p>
                    <p className="text-blue-600 font-semibold flex items-center justify-center">
                        Authenticated <span className="ml-1">✔️</span>
                    </p>
                </div>

                {/* Basic Information */}
                <div className="bg-white border-2 p-6 rounded-lg shadow-sm relative">
                    <h2 className="text-lg font-semibold">Basic Information</h2>
                    <FiEdit3 className="absolute top-4 right-4 text-red-500 cursor-pointer" onClick={() => handleEditClick({
                        email: user.email,
                        phone: user.phone,
                        linkedin: user.linkedin,
                        address: user.address,
                        birthdate: user.birthdate,
                        maritalStatus: user.maritalStatus
                    })} />
                    <div className="mt-3 space-y-2 text-gray-700">
                        <p className="flex items-center"><FaEnvelope className="mr-2 text-gray-500" /> <a href={`mailto:${user.email}`} className="text-blue-600">{user.email}</a></p>
                        <p className="flex items-center"><FaPhone className="mr-2 text-gray-500" /> {user.phone}</p>
                        <p className="flex items-center"><BsLinkedin className="mr-2 text-gray-500" /> <a href={user.linkedin} className="text-blue-600">LinkedIn Profile</a></p>
                        <p className="flex items-center"><FaMapMarkerAlt className="mr-2 text-gray-500" /> {user.address}</p>
                        <p className="flex items-center"><FaBirthdayCake className="mr-2 text-gray-500" /> {user.birthdate}</p>
                        <p className="flex items-center"><FaUser className="mr-2 text-gray-500" /> {user.maritalStatus}</p>
                    </div>
                </div>
            </div>

            {/* Educational Information & Current Working Profile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white border-2 p-6 rounded-lg shadow-sm relative">
                    <h2 className="text-lg font-semibold">REA related experience</h2>
                    <FiEdit3 className="absolute top-4 right-4 text-red-500 cursor-pointer" onClick={() => handleEditClick({
                        university: user.university,
                        degree: user.degree,
                        years: user.years
                    })} />
                    <p className="mt-3 text-gray-700">{user.university}</p>
                    <p className="text-gray-500">{user.degree}</p>
                    <p className="text-gray-500">{user.years}</p>
                </div>

                <div className="bg-white border-2 p-6 rounded-lg shadow-sm relative">
                    <h2 className="text-lg font-semibold">Current Working Profile</h2>
                    <FiEdit3 className="absolute top-4 right-4 text-red-500 cursor-pointer" onClick={() => handleEditClick({
                        position: user.position,
                        company: user.company,
                        department: user.department,
                        since: user.since
                    })} />
                    <p className="mt-3 text-purple-700 font-semibold">{user.position}</p>
                    <p className="text-gray-700">{user.company}</p>
                    <p className="text-gray-500">{user.department}</p>
                    <p className="text-gray-500">{user.since}</p>
                </div>

                {/* Profile Summary */}
                <div className="bg-white border-2 p-6 rounded-lg shadow-sm mt-6 relative">
                    <h2 className="text-lg font-semibold">Profile Summary</h2>
                    <FiEdit3 className="absolute top-4 right-4 text-red-500 cursor-pointer" onClick={() => handleEditClick({
                        summary: user.summary
                    })} />
                    <p className="mt-3 text-gray-700">{user.summary}</p>
                </div>

                <div className="bg-white border-2 p-6 rounded-lg shadow-sm mt-6 relative">
                    <h2 className="text-lg font-semibold"> Education </h2>
                    <span className="absolute top-4 right-4 text-red-500 cursor-pointer flex row gap-1 items-center " onClick={() => handleEditClick({
                        education: user.education
                    })}>
                        <span>
                            Add Education
                        </span>
                    </span>
                    <p className="mt-3 text-gray-700">{user.education}</p>
                </div>

                <div className="bg-white border-2 p-6 rounded-lg shadow-sm relative">
                    <h2 className="text-lg font-semibold"> Experience </h2>
                    <FiEdit3 className="absolute top-4 right-4 text-red-500 cursor-pointer" onClick={() => handleEditClick({
                        experience: user.experience
                    })} />
                    <p className="text-gray-700">{user.experience}</p>
                </div>
            </div>

            <EditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} data={modalData} onSave={handleSave} />
        </div>
    );
};

export default Profile;