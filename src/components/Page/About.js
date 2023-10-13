import React from "react";
import AppHeader from "../Layout/AppHeader";
import AppFooter from "../Layout/AppFooter";

const About = () => {
    return (
        <>
            <AppHeader />
            <div className="min-h-screen bg-white py-2 px-6 text-center">
                <div className="overflow-hidden h-72"><img src="https://i.pinimg.com/564x/94/aa/d3/94aad3ca1722997073b42babfe416ad9.jpg" alt="about us" className="w-full"/></div>
                <h1 className="text-2xl font-semibold mb-4 py-4">About Us</h1>
                <h3>Our Purpose</h3>
                <p className="text-gray-700 py-2">
                    We believe every woman, girl and they deserves to learn, grow and shine.
                </p>
                <h3>Our Vision</h3>
                <p className="text-gray-700 py-2">We will empower women through their style.</p>
            </div>
            <AppFooter />
        </>
    );
};

export default About;
