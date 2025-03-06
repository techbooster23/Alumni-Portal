import React, { useState } from "react";
import DirectoryCard from "./DirectoryCard";
import { FaSearch } from "react-icons/fa";
import avatar_img from "../assets/avatar.jpeg";

const HomeMain2 = () => {
    const [searchText, setSearchText] = useState("");
    const [selectedProfile, setSelectedProfile] = useState(null);

    //    const directoryData = [
    //         {
    //             index: 1,
    //             name: "Aarav Sharma",
    //             role: "Software Engineer",
    //             company: "Infosys",
    //             bio: "Experienced in backend systems.",
    //             education: "B.Tech in Computer Science, G.H. Raisoni University",
    //             experience: "5 years at Infosys",
    //             since: "since 2028",
    //             skills: ["Java", "Spring Boot", "Microservices"],
    //             socialLinks: {
    //                 linkedin: "https://linkedin.com/in/aaravsharma",
    //                 github: "https://github.com/aaravsharma"
    //             }
    //         },
    //         {
    //             index: 2,
    //             name: "Priya Nair",
    //             role: "Data Scientist",
    //             company: "TCS",
    //             bio: "Data analysis and machine learning enthusiast.",
    //             education: "M.Sc in Data Science, G.H. Raisoni University",
    //             experience: "3 years at TCS",
    //             since: "since 2027",
    //             skills: ["Python", "Pandas", "Machine Learning"],
    //             socialLinks: {
    //                 linkedin: "https://linkedin.com/in/priyanair",
    //                 github: "https://github.com/priyanair"
    //             }
    //         },
    //         {
    //             index: 3,
    //             name: "Rohit Verma",
    //             role: "Product Manager",
    //             company: "Flipkart",
    //             bio: "Product development and strategy expert.",
    //             education: "MBA, G.H. Raisoni University",
    //             experience: "6 years at Flipkart",
    //             since: "since 2026",
    //             skills: ["Product Management", "Agile", "Scrum"],
    //             socialLinks: {
    //                 linkedin: "https://linkedin.com/in/rohitverma"
    //             }
    //         },
    //         {
    //             index: 4,
    //             name: "Sneha Patil",
    //             role: "UX Designer",
    //             company: "Zomato",
    //             bio: "Creative designer with a focus on user experience.",
    //             education: "B.Des in UI/UX Design, G.H. Raisoni University",
    //             experience: "4 years at Zomato",
    //             since: "since 2025",
    //             skills: ["Figma", "Adobe XD", "User Research"],
    //             socialLinks: {
    //                 linkedin: "https://linkedin.com/in/snehapatil",
    //                 behance: "https://behance.net/snehapatil"
    //             }
    //         },
    //         {
    //             index: 5,
    //             name: "Vikram Singh",
    //             role: "Network Administrator",
    //             company: "HCL Technologies",
    //             bio: "Specialist in network management and security.",
    //             education: "B.Tech in IT, G.H. Raisoni University",
    //             experience: "7 years at HCL",
    //             since: "since 2024",
    //             skills: ["Networking", "Cisco", "Security"],
    //             socialLinks: {
    //                 linkedin: "https://linkedin.com/in/vikramsingh"
    //             }
    //         },
    //         {
    //             index: 6,
    //             name: "Anjali Mehta",
    //             role: "Business Analyst",
    //             company: "Deloitte",
    //             bio: "Business insights and analytics professional.",
    //             education: "MBA in Business Analytics, G.H. Raisoni University",
    //             experience: "5 years at Deloitte",
    //             since: "since 2023",
    //             skills: ["Business Analysis", "Excel", "Power BI"],
    //             socialLinks: {
    //                 linkedin: "https://linkedin.com/in/anjalimehta"
    //             }
    //         },
    //         {
    //             index: 7,
    //             name: "Nitin Joshi",
    //             role: "Full Stack Developer",
    //             company: "Microsoft",
    //             bio: "Passionate about building scalable web applications.",
    //             education: "M.Tech in Computer Science, G.H. Raisoni University",
    //             experience: "4 years at Microsoft",
    //             skills: ["React", "Node.js", "MongoDB"],
    //             socialLinks: {
    //                 linkedin: "https://linkedin.com/in/nitinjoshi",
    //                 github: "https://github.com/nitinjoshi"
    //             }
    //         },
    //         {
    //             index: 8,
    //             name: "Kavita Deshmukh",
    //             role: "HR Manager",
    //             company: "Accenture",
    //             bio: "Expert in talent acquisition and management.",
    //             education: "MBA in HR, G.H. Raisoni University",
    //             experience: "6 years at Accenture",
    //             skills: ["Recruitment", "Employee Relations", "HR Policies"],
    //             socialLinks: {
    //                 linkedin: "https://linkedin.com/in/kavitadeshmukh"
    //             }
    //         },
    //         {
    //             index: 9,
    //             name: "Arjun Patel",
    //             role: "DevOps Engineer",
    //             company: "Amazon",
    //             bio: "Automating deployment and managing cloud infrastructure.",
    //             education: "B.Tech in IT, G.H. Raisoni University",
    //             experience: "5 years at Amazon",
    //             skills: ["AWS", "Docker", "CI/CD"],
    //             socialLinks: {
    //                 linkedin: "https://linkedin.com/in/arjunpatel",
    //                 github: "https://github.com/arjunpatel"
    //             }
    //         },
    //         {
    //             index: 10,
    //             name: "Simran Kaur",
    //             role: "Content Writer",
    //             company: "Byju's",
    //             bio: "Creative writer with a flair for educational content.",
    //             education: "B.A. in English, G.H. Raisoni University",
    //             experience: "3 years at Byju's",
    //             skills: ["Content Writing", "SEO", "Copywriting"],
    //             socialLinks: {
    //                 linkedin: "https://linkedin.com/in/simrankaur"
    //             }
    //         },
    //         {
    //             index: 11,
    //             name: "Rahul Mishra",
    //             role: "Financial Analyst",
    //             company: "Goldman Sachs",
    //             bio: "Financial modeling and investment strategy specialist.",
    //             education: "M.Com in Finance, G.H. Raisoni University",
    //             experience: "4 years at Goldman Sachs",
    //             skills: ["Financial Analysis", "Excel", "Investment Strategies"],
    //             socialLinks: {
    //                 linkedin: "https://linkedin.com/in/rahulmishra"
    //             }
    //         },
    //         {
    //             index: 12,
    //             name: "Megha Kapoor",
    //             role: "Marketing Specialist",
    //             company: "Swiggy",
    //             bio: "Digital marketing and brand strategy expert.",
    //             education: "MBA in Marketing, G.H. Raisoni University",
    //             experience: "5 years at Swiggy",
    //             skills: ["Digital Marketing", "Brand Management", "SEO"],
    //             socialLinks: {
    //                 linkedin: "https://linkedin.com/in/meghakapoor"
    //             }
    //         },
    //         {
    //             index: 13,
    //             name: "Amit Rana",
    //             role: "Mechanical Engineer",
    //             company: "L&T",
    //             bio: "Specializes in industrial design and project management.",
    //             education: "B.E. in Mechanical Engineering, G.H. Raisoni University",
    //             experience: "6 years at L&T",
    //             skills: ["AutoCAD", "SolidWorks", "Project Management"],
    //             socialLinks: {
    //                 linkedin: "https://linkedin.com/in/amitrana"
    //             }
    //         },
    //         {
    //             index: 14,
    //             name: "Pooja Sinha",
    //             role: "Healthcare Consultant",
    //             company: "Cognizant",
    //             bio: "Providing data-driven insights in healthcare management.",
    //             education: "M.Sc in Healthcare Management, G.H. Raisoni University",
    //             experience: "4 years at Cognizant",
    //             skills: ["Healthcare Management", "Data Analysis", "Consulting"],
    //             socialLinks: {
    //                 linkedin: "https://linkedin.com/in/poojasinha"
    //             }
    //         },
    //         {
    //             index: 15,
    //             name: "Manish Tiwari",
    //             role: "Graphic Designer",
    //             company: "Red Chillies Entertainment",
    //             bio: "Visual storyteller through graphics and animation.",
    //             education: "B.Des in Graphic Design, G.H. Raisoni University",
    //             experience: "5 years at Red Chillies Entertainment",
    //             skills: ["Photoshop", "Illustrator", "After Effects"],
    //             socialLinks: {
    //                 linkedin: "https://linkedin.com/in/manishtiwari",
    //                 behance: "https://behance.net/manishtiwari"
    //             }
    //         }
    //     ]; 

    const directoryData = [
        {
            index: 1,
            name: "Aarav Sharma",
            role: "Software Engineer",
            company: "Infosys",
            bio: "Aarav is a passionate Software Engineer with expertise in full-stack development. He specializes in building robust backend systems and modern web applications using technologies like React, Node.js, and MongoDB. Aarav is committed to delivering scalable, efficient, and user-centric digital solutions that meet business needs.",
            education: "Bachelor of Computer Application, BCA",
            classOf: "2026",
            studyYears: "2022 - 2024",
            experience: "Since 2028",
            skills: ["React", "Node.js", "MongoDB"],
            socialLinks: {
                linkedin: "https://linkedin.com/in/aaravsharma",
                github: "https://github.com/aaravsharma"
            }
        },
        {
            index: 2,
            name: "Priya Nair",
            role: "Data Scientist",
            company: "TCS",
            bio: "Priya is an innovative Data Scientist with a deep understanding of data analytics and machine learning. She has experience in building predictive models, analyzing large datasets, and delivering data-driven insights. Her expertise in Python and Pandas helps her create impactful solutions for complex business challenges.",
            education: "M.Sc in Data Science",
            classOf: "2025",
            studyYears: "2021 - 2023",
            experience: "Since 2027",
            skills: ["Python", "Pandas", "Machine Learning"],
            socialLinks: {
                linkedin: "https://linkedin.com/in/priyanair",
                github: "https://github.com/priyanair"
            }
        },
        {
            index: 3,
            name: "Rohit Verma",
            role: "Product Manager",
            company: "Flipkart",
            bio: "Rohit is a strategic Product Manager with over 6 years of experience in product development and management. He excels in agile methodologies, leading cross-functional teams, and creating effective product strategies. His focus on user experience and market trends drives successful product launches and growth.",
            education: "MBA, Business Management",
            classOf: "2024",
            studyYears: "2020 - 2022",
            experience: "Since 2026",
            skills: ["Product Management", "Agile", "Scrum"],
            socialLinks: {
                linkedin: "https://linkedin.com/in/rohitverma"
            }
        },
        {
            index: 4,
            name: "Sneha Patil",
            role: "UX Designer",
            company: "Zomato",
            bio: "Sneha is a creative UX Designer with a strong focus on crafting intuitive and user-friendly interfaces. She combines design thinking with a deep understanding of user needs to build engaging experiences. Her expertise in Figma and Adobe XD enables her to design seamless digital products.",
            education: "B.Des in UI/UX Design",
            classOf: "2027",
            studyYears: "2023 - 2025",
            experience: "Since 2029",
            skills: ["Figma", "Adobe XD", "User Research"],
            socialLinks: {
                linkedin: "https://linkedin.com/in/snehapatil",
                behance: "https://behance.net/snehapatil"
            }
        },
        {
            index: 5,
            name: "Vikram Singh",
            role: "Network Administrator",
            company: "HCL Technologies",
            bio: "Vikram is a skilled Network Administrator with expertise in managing and securing complex IT networks. He has a proven track record in implementing robust network solutions and enhancing cybersecurity measures. Vikram is dedicated to ensuring seamless and secure network operations for his organization.",
            education: "B.Tech in Information Technology",
            classOf: "2026",
            studyYears: "2022 - 2024",
            experience: "Since 2028",
            skills: ["Networking", "Cisco", "Security"],
            socialLinks: {
                linkedin: "https://linkedin.com/in/vikramsingh"
            }
        },
        {
            index: 6,
            name: "Anjali Mehta",
            role: "Business Analyst",
            company: "Deloitte",
            bio: "Anjali is a dynamic Business Analyst with a talent for transforming complex data into actionable business insights. She excels in analyzing market trends, improving business processes, and delivering effective solutions. Anjali’s analytical approach helps organizations achieve efficiency and strategic growth.",
            education: "MBA in Business Analytics",
            classOf: "2025",
            studyYears: "2021 - 2023",
            experience: "Since 2027",
            skills: ["Business Analysis", "Excel", "Power BI"],
            socialLinks: {
                linkedin: "https://linkedin.com/in/anjalimehta"
            }
        },
        {
            index: 7,
            name: "Nitin Joshi",
            role: "Full Stack Developer",
            company: "Microsoft",
            bio: "Nitin is a versatile Full Stack Developer with a passion for creating dynamic web applications. His expertise spans both frontend and backend technologies, including React, Node.js, and MongoDB. He is dedicated to building high-quality, scalable, and maintainable software solutions.",
            education: "M.Tech in Computer Science",
            classOf: "2026",
            studyYears: "2022 - 2024",
            experience: "Since 2028",
            skills: ["React", "Node.js", "MongoDB"],
            socialLinks: {
                linkedin: "https://linkedin.com/in/nitinjoshi",
                github: "https://github.com/nitinjoshi"
            }
        },
        {
            index: 8,
            name: "Kavita Deshmukh",
            role: "HR Manager",
            company: "Accenture",
            bio: "Kavita is a proactive HR Manager with extensive experience in talent acquisition, employee engagement, and policy management. She is skilled in creating positive workplace environments, leading recruitment strategies, and fostering professional growth within organizations through effective HR practices.",
            education: "MBA in Human Resources",
            classOf: "2024",
            studyYears: "2020 - 2022",
            experience: "Since 2026",
            skills: ["Recruitment", "Employee Relations", "HR Policies"],
            socialLinks: {
                linkedin: "https://linkedin.com/in/kavitadeshmukh"
            }
        },
        {
            index: 9,
            name: "Arjun Patel",
            role: "DevOps Engineer",
            company: "Amazon",
            bio: "Arjun is an experienced DevOps Engineer specializing in cloud infrastructure and automation. He is proficient in AWS, Docker, and CI/CD pipelines. Arjun’s approach to integrating development and operations ensures efficient and reliable software delivery in fast-paced environments.",
            education: "B.Tech in IT",
            classOf: "2026",
            studyYears: "2022 - 2024",
            experience: "Since 2028",
            skills: ["AWS", "Docker", "CI/CD"],
            socialLinks: {
                linkedin: "https://linkedin.com/in/arjunpatel",
                github: "https://github.com/arjunpatel"
            }
        },
        {
            index: 10,
            name: "Simran Kaur",
            role: "Content Writer",
            company: "Byju's",
            bio: "Simran is a creative Content Writer with a talent for producing engaging and informative content. She specializes in educational writing and digital content strategies. Her work helps brands connect with their audience through clear, impactful, and well-researched articles and marketing materials.",
            education: "B.A. in English",
            classOf: "2025",
            studyYears: "2021 - 2023",
            experience: "Since 2027",
            skills: ["Content Writing", "SEO", "Copywriting"],
            socialLinks: {
                linkedin: "https://linkedin.com/in/simrankaur"
            }
        }
    ];

    const foundDirectory = directoryData.filter((data) =>
        data.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const handleViewProfile = (profile) => {
        setSelectedProfile(profile);
    };

    const handleCloseProfile = () => {
        setSelectedProfile(null);
    };

    return (
        <div className="w-full md:w-[80%] min-h-screen py-20 px-4 md:px-5 bg-white">
            {selectedProfile ? (
                <div className=" bg-white rounded-lg mt-2">
                    <div className="p-5 border-4 shadow-lg rounded-lg">
                        <div className=" flex items-center gap-5 ">
                            <div>
                                <button
                                    onClick={handleCloseProfile}
                                    className="mb-4 bg-gray-200 px-3 py-1 rounded-full"
                                >
                                    Back to Directory
                                </button>
                                <img
                                    src={avatar_img}
                                    alt={selectedProfile.name}
                                    className="w-32 h-32 rounded-full border-2 border-purple-700 p-2"
                                />
                            </div>
                            <div className="mt-10">
                                <h2 className="text-3xl tracking-wide font-semibold mt-4">{selectedProfile.name}</h2>
                                <p className="text-purple-700 font-semibold text-lg ">{selectedProfile.role}</p>
                                <p className="text-gray-700 font-semibold text-md">{selectedProfile.company}</p>
                                <small className="text-gray-700 mb-4">Since {selectedProfile.classOf}</small>
                            </div>
                        </div>
                        <div className="mt-5">
                            <p className="">
                                {selectedProfile.bio}
                            </p>
                        </div>
                    </div>

                    <div className="oppolo mt-5 flex gap-5">
                        <div className="shadow-lg border-4 rounded-lg p-5 w-1/2">
                            <h1 className="font-semibold"> Alumni, Class of 2026 </h1>
                            <p className="text-gray-500 mt-2"> {selectedProfile.education} </p>
                            <p className="text-gray-500"> {selectedProfile.studyYears} </p>
                        </div>

                        <div className="shadow-lg border-4 rounded-lg p-5 w-1/2">
                            <h1 className="font-semibold"> Skills </h1>
                            <div className="mt-3 flex gap-4">
                                {selectedProfile.skills.map((skill, index) => (
                                    <span key={index} className="text-purple-700 border border-purple-600 px-2 mt-2 py-1 rounded-md tracking-wider block">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            ) : (
                <>
                    <div className="flex flex-col mt-2 sm:flex-row items-center justify-between w-full border-b border-gray-600 pb-5">
                        <h1 className="text-3xl font-semibold text-black">Alumni Directory</h1>

                        <div className="flex items-center space-x-3 mt-3 sm:mt-0">
                            <div className="relative">
                                <FaSearch className="absolute left-3 top-3 text-gray-500" />
                                <input
                                    type="text"
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                    placeholder="Search by name"
                                    className="pl-10 pr-4 py-2 border border-gray-400 rounded-full text-gray-700 focus:ring-2 focus:ring-purple-300 outline-none w-full sm:w-96"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 text-center">
                        {foundDirectory.length === 0 ? (
                            <h1 className="text-md text-center">
                                No data found <span className="font-semibold">{searchText}</span>
                            </h1>
                        ) : (
                            foundDirectory.map((data, index) => (
                                <DirectoryCard
                                    key={index}
                                    name={data.name}
                                    role={data.role}
                                    company={data.company}
                                    image={avatar_img}
                                    onViewProfile={() => handleViewProfile(data)}
                                />
                            ))
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default HomeMain2;