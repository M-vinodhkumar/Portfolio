import React from 'react';

// You can move this data to a separate JSON file and import it
const projectData = [
    {
        title: "E-commerce Platform",
        description: "I developed a fully responsive e-commerce website dedicated to showcasing and selling different types of cameras. The platform is designed to provide a smooth and user-friendly shopping experience with modern UI and fast performance.",
        image: "/src/components/E-commerce.jpg", // Place image in public folder
        liveLink: "https://e-commerce-eight-silk.vercel.app/",
        githubLink: "https://github.com/M-vinodhkumar/E-commerce"
    },
    {
        title: "BulkMail-MERN Stack Mailing Website",
        description: "A full-stack web application designed to simplify bulk email campaigns. This tool allows authenticated users to upload an Excel sheet of contacts, compose a message, and dispatch personalized emails efficiently. The application includes a dashboard to track the status of sent emails.",
        image: "/src/components/Bulkmail.png",
        liveLink: "https://bulkmail-sender.vercel.app/",
        githubLink: "https://github.com/M-vinodhkumar/Bulkmail-sender",
        tech: "Tech Stack : React, Node.js, Express, MongoDB, Nodemailer, Tailwind CSS"
    },
    {
        title: "Weather App using API",
        description: "This is ideal for a project built primarily with a frontend framework like React that calls a public weather API.",
        image: "/src/components/weather.png", // Place image in public folder
        liveLink: "https://cweather001.vercel.app/",
        githubLink: "https://github.com/M-vinodhkumar/Cweather001",
        tech: "Tech Stack : React, Tailwind CSS, OpenWeatherMap API"
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-center mb-12">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData.map((project, index) => (
                        <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <p>{project.tech}</p>
                                <div className="flex justify-start space-x-4">
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-semibold">View Live</a>
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-semibold">GitHub</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;