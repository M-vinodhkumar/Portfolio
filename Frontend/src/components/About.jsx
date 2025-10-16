import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-center mb-12">Profile</h2>
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

                    {/* Image Section */}
                    <div className="md:w-1/3 w-full flex justify-center">
                        {/* Place your image in the `public` folder and update the src path */}
                        <img
                            src="/src/assets/image/WhatsApp Image 2025-09-22 at 09.34.15_0c37a829.jpg"
                            alt="Vinodh Kumar"
                            className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-cyan-500"
                        />
                    </div>

                    {/* Text Content Section */}
                    <div className="md:w-2/3 w-full">
                        <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                            As a highly motivated and detail-oriented recent graduate with a strong foundation in Html5, Css3, JavaScript, React, Tailwindcss, Node.js, Express.js, Mongodb, Vite tool. I am seeking a challenging “entry-level MERN-stack developer” position where I can apply my technical skills, problem solving abilities, and enthusiasm for learning to contribute to the success of a dynamic team. I aim to leverage my academicbackground and passion for coding to develop innovative solution and grow within a forward-thinking organization that values creativity and continuous improvement.
                        </p>
                        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                            My journey in tech is fueled by a constant desire to learn and adapt to new technologies. I thrive in collaborative environments and am always looking for opportunities to solve challenging problems and contribute to meaningful projects.
                        </p>
                        <div className="text-center md:text-left">
                            <a      
                                href="/src/assets/resume A vinodh MERN (1).pdf" // Place your resume in the `public` folder
                                download
                                className="inline-block bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-700 transition-colors duration-300 shadow-md"
                            >
                                Download My Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;