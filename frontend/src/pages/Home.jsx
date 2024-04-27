import React, { useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import TopNavBlack from "../component/TopNavBlack";

// Import images
const spec1 = process.env.PUBLIC_URL + '/spec1.jpg';
const spec2 = process.env.PUBLIC_URL + '/spec2.jpg';
const spec3 = process.env.PUBLIC_URL + '/spec3.jpg';

const Home = () => {
    const backgroundImage = process.env.PUBLIC_URL + '/homeBg.jpg';  // Path to the background image
    const aiCarDetailsRef = useRef(null);

    const scrollToAiCarDetails = () => {
        aiCarDetailsRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="relative overflow-hidden">
            <TopNavBlack />
            <div 
                className="absolute top-0 left-0 w-full h-screen bg-cover bg-no-repeat" 
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>
            <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-50 z-0"></div>
            
            <div className="container mx-auto h-screen flex flex-col justify-center items-start relative z-10 pl-16">
                <h1 className="text-6xl font-bold mb-4 text-white">CapBay Vroom</h1>
                <p className="text-xl text-white">
                    Future of driving: CapBay Vroom,
                </p>
                <p className="text-xl text-white">
                    our latest AI-powered model.
                </p>
                <p className="text-xl text-white">
                    Available now at RM 200,000.
                </p>
                <button 
                    onClick={scrollToAiCarDetails} 
                    className="mt-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 font-semibold transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Learn More
                </button>
            </div>

            {/* AI Car Specifications Section */}
            <section ref={aiCarDetailsRef} className="container mx-auto mt-8 h-screen flex flex-col justify-center items-center relative z-10">
                <h2 className="text-6xl font-bold mb-4 text-gray-800">CapBay Vroom Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                    <div className="flex flex-col justify-center items-center space-y-6 p-6 shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100 rounded-lg">
                        <img src={spec1} alt="AI Car" className="mb-4 w-56 h-56 object-cover rounded-full"/>
                        <h2 className="text-4xl font-bold mb-4 text-gray-700">AI-Powered Autopilot</h2>
                        <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed">
                            <li>Experience hands-free driving with our AI-powered autopilot system</li>
                            <li>Intelligently adapts to road conditions and traffic patterns</li>
                            <li>Ensures a smooth and efficient journey</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-6 p-6 shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100 rounded-lg">
                        <img src={spec2} alt="AI Car" className="mb-4 w-56 h-56 object-cover rounded-full"/>
                        <h2 className="text-4xl font-bold mb-4 text-gray-700">Smart Collision Avoidance</h2>
                        <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed">
                            <li>Constantly monitors the surroundings</li>
                            <li>Takes proactive measures to prevent accidents</li>
                            <li>Provides peace of mind during every drive</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-6 p-6 shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100 rounded-lg">
                        <img src={spec3} alt="AI Car" className="mb-4 w-56 h-56 object-cover rounded-full"/>
                        <h2 className="text-4xl font-bold mb-4 text-gray-700">Intelligent Voice Assistant</h2>
                        <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed">
                            <li>Control various car functions hands-free</li>
                            <li>Stay connected and informed on the go</li>
                            <li>Makes driving more convenient and enjoyable</li>
                        </ul>
                    </div>
                </div>
                {/* Button to navigate to register page */}
                <Link to="/register" className="mt-8 bg-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 font-semibold transition duration-300 ease-in-out transform hover:scale-105">
                    Book Test Drive
                </Link>
            </section>
        </div>
    );
};

export default Home;
