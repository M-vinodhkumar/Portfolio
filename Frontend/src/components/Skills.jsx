import React from 'react';
// Import icons from the react-icons library
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

// Array of skills with names and corresponding icons
const skillsData = [
    { name: 'HTML5', icon: <FaHtml5 className="w-12 h-12 text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="w-12 h-12 text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="w-12 h-12 text-yellow-500" /> },
    { name: 'React', icon: <FaReact className="w-12 h-12 text-cyan-400" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-12 h-12 text-teal-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="w-12 h-12 text-green-500" /> },
    { name: 'Express.js', icon: <SiExpress className="w-12 h-12 text-gray-400" /> },
    { name: 'MongoDB', icon: <SiMongodb className="w-12 h-12 text-green-600" /> },
    { name: 'Git', icon: <FaGitAlt className="w-12 h-12 text-orange-600" /> },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-center mb-12 text-white">My Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {skillsData.map((skill) => (
                        <div
                            key={skill.name}
                            className="flex flex-col items-center justify-center bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-300"
                        >
                            {skill.icon}
                            <p className="mt-4 text-white font-semibold text-center">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;